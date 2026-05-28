/**
 * stripNumericPrefix — strip Obsidian sort-order number prefixes
 * from displayed names. Used in four places that all need the same
 * pattern so they stay in sync:
 *
 *   1. The StripNumberPrefix transformer plugin — page titles, breadcrumbs,
 *      <title> tag, backlinks, recent notes (anything reading frontmatter.title).
 *   2. quartz.layout.ts Explorer mapFn — sidebar displayed names.
 *   3. Breadcrumbs.tsx formatCrumb — folder names along the breadcrumb chain
 *      that don't have an index.md (so frontmatter.title isn't populated).
 *   4. folderPage.tsx computeFolderInfo — the default folder page title
 *      generated when a folder has no index.md.
 *
 * Pattern: ^\d+(\.\d+)*[\s._\-]+
 *   "0.0 - Home"     → "Home"
 *   "01_Production"  → "Production"
 *   "1.2 Casting"    → "Casting"
 *   "Home"           → "Home"            (no prefix → unchanged)
 *
 * To opt OUT for a single file with a legit numeric title (e.g. "2024 Recap"),
 * set `title:` explicitly in that file's frontmatter — the transformer only
 * strips when the title is filename-derived.
 */
export function stripNumericPrefix(s: string): string {
  if (typeof s !== "string") return s
  const stripped = s.replace(/^\d+(\.\d+)*[\s._\-]+/, "").trim()
  return stripped || s
}

/**
 * Apply stripNumericPrefix to every slash-separated segment of a path-ish
 * string. Used by the default folder title generator so a nested folder
 * like "Shows/01_Lion King" → "Shows/Lion King" not "Lion King" alone.
 */
export function stripNumericPrefixPath(p: string): string {
  if (typeof p !== "string") return p
  return p.split("/").map(stripNumericPrefix).join("/")
}
