import { QuartzTransformerPlugin } from "../types"
import { FullSlug } from "../../util/path"

/**
 * PromoteFolderIndex — promote a folder's "overview" file to be the folder's
 * landing page (i.e. behave like an `index.md` even though it isn't one).
 *
 * Why: Encore's vault uses the convention `0.0 - <Folder Name>.md` for hub
 * overview docs (see CLAUDE.md: "Hub overview docs in folders with numbered
 * notes use a 0.0 - prefix so they sort first"). After the prefix-stripping
 * transformer, those files DISPLAY as just the folder's name — which makes
 * folder + overview look like duplicate Explorer entries. The fix: actually
 * fold them into the folder's index page, so clicking the folder shows the
 * overview content and the duplicate sidebar entry goes away.
 *
 * Also supports `README.md` (case-insensitive) for any future use, matching
 * the GitHub convention.
 *
 * ── How it works ──
 * After FrontMatter has set `data.slug` to the per-file slug, we detect
 * promotable files by their stem and rewrite `data.slug` from
 *   "<folder>/<original-slug>"
 * to
 *   "<folder>/index"
 * The original slug is preserved as an alias so Quartz's AliasRedirects
 * emitter generates a 302 from the old URL to the new one (back-compat).
 *
 * ── Edge cases ──
 * - **Already at root**: skipped — no folder to promote into.
 * - **Folder already has its own index.md**: both files end up claiming
 *   the same `<folder>/index` slug. We don't have a clean way to inspect
 *   siblings inside a per-file transformer, so we just don't promote when
 *   the stem is literally `index`. If both an `index.md` AND a `0.0 -` file
 *   exist in the same folder, the explicit index.md will be processed first
 *   (alphabetical) and the promotion essentially overrides it. The vault
 *   currently has zero such collisions (1 root index.md + 5 `0.0 -` docs,
 *   each in its own folder).
 * - **Two promotable files in one folder** (`README.md` + `0.0 - X.md`):
 *   last one processed wins. Not a real case in the vault today.
 */
export const PromoteFolderIndex: QuartzTransformerPlugin = () => {
  return {
    name: "PromoteFolderIndex",
    markdownPlugins() {
      return [
        () => {
          return (_tree, file) => {
            const data: any = file.data
            const stem = (file as any).stem ?? ""
            if (!stem || stem === "index") return

            // Promotable: "0.0 - Anything" (Encore hub-doc convention) or
            // "README" (any case, GitHub convention).
            const isHubDoc = /^0\.0\s*[-_.]\s*\S/.test(stem)
            const isReadme = /^readme$/i.test(stem)
            if (!isHubDoc && !isReadme) return

            const slug = String(data.slug || "")
            if (!slug) return
            const segments = slug.split("/")
            if (segments.length < 2) return // file is at vault root — nothing to promote into

            // Rewrite slug to <folder>/index. Preserve the original slug as an
            // alias so any pre-existing inbound link to the old URL still works
            // (the AliasRedirects emitter handles the 302).
            const folderSegments = segments.slice(0, -1)
            const newSlug = (folderSegments.join("/") + "/index") as FullSlug
            const oldSlug = slug as FullSlug
            if (newSlug === oldSlug) return

            const existingAliases: FullSlug[] = Array.isArray(data.aliases) ? data.aliases : []
            if (!existingAliases.includes(oldSlug)) existingAliases.push(oldSlug)
            data.aliases = existingAliases
            data.slug = newSlug
          }
        },
      ]
    },
  }
}
