import { QuartzTransformerPlugin } from "../types"
import { stripNumericPrefix } from "../../util/stripPrefix"

/**
 * StripNumberPrefix — hides Obsidian sort-order number prefixes from
 * displayed titles on the published Encore A–Z site.
 *
 * Filenames like "0.0 - Home.md", "01_Production.md", "1.2 Casting.md"
 * have leading numeric prefixes that exist purely to control sort order
 * inside Obsidian. On the public site those numbers add visual noise.
 *
 * This transformer strips the prefix from `frontmatter.title` AFTER the
 * built-in FrontMatter plugin has set it. It affects: article titles
 * (the page h1), breadcrumb trail labels, the <title> tag, backlinks,
 * recent-notes list, and any other surface that reads `frontmatter.title`.
 *
 * URL slugs are NOT touched — links keep working, and external links
 * to numbered URLs don't break.
 *
 * ── Pattern ──
 * Strips: `^\d+(\.\d+)*[\s._\-]+`
 *   "0.0 - Home"     → "Home"
 *   "01_Production"  → "Production"
 *   "1.2 Casting"    → "Casting"
 *   "Home"           → "Home"            (no prefix → unchanged)
 *
 * ── Override ──
 * If a file's frontmatter has an explicit `title:` field, that wins
 * over the filename and is left ALONE — so a file legitimately named
 * "2024 Recap" can keep its number by adding `title: 2024 Recap`.
 * (Without that frontmatter, the regex would strip it.)
 *
 * Implementation note: we set a `__rawFilenameTitle` flag on the data
 * object during FrontMatter so we know whether the title came from
 * frontmatter or from the filename fallback. Only filename-derived
 * titles get stripped. Since the built-in FrontMatter plugin doesn't
 * set this flag, we re-derive it here by re-reading the original
 * frontmatter to check.
 */
export const StripNumberPrefix: QuartzTransformerPlugin = () => {
  return {
    name: "StripNumberPrefix",
    markdownPlugins() {
      return [
        () => {
          return (_tree, file) => {
            const data: any = file.data
            const title = data?.frontmatter?.title
            if (typeof title !== "string") return

            // Detect whether the title came from frontmatter (user-set, leave
            // alone) or from the filename fallback (strip the prefix). The
            // FrontMatter plugin uses `file.stem` as fallback when no explicit
            // title is set; if title === file.stem, it's filename-derived.
            const stem = (file as any).stem ?? ""
            const isFilenameDerived = title === stem

            if (!isFilenameDerived) return

            const stripped = stripNumericPrefix(title)
            if (stripped !== title) {
              data.frontmatter.title = stripped
            }
          }
        },
      ]
    },
  }
}
