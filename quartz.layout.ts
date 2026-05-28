import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"
// Note: Explorer.mapFn below uses an inlined regex (not the imported
// stripNumericPrefix util) because Quartz serializes the function to a string
// for client-side execution — external imports wouldn't be available there.
// The regex is kept in sync with quartz/util/stripPrefix.ts.

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/jackyzha0/quartz",
      "Discord Community": "https://discord.gg/cRFFHYye7t",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
        { Component: Component.ReaderMode() },
      ],
    }),
    // Strip Obsidian sort-order number prefixes from sidebar entries so
    // "0.0 - Home" reads as "Home", "01_Production" reads as "Production",
    // etc. Mirrors the StripNumberPrefix transformer that handles the
    // page-title side; here we transform the Explorer's per-node displayName.
    Component.Explorer({
      mapFn: (node) => {
        // See quartz/util/stripPrefix.ts — strips Obsidian sort-order prefixes
        // ("0.0 - ", "01_", "1.2 ") from displayed names. The regex is inlined
        // here rather than imported because Quartz serializes this function to
        // a string for client-side execution; an external import wouldn't survive.
        if (typeof node.displayName === "string") {
          const stripped = node.displayName.replace(/^\d+(\.\d+)*[\s._\-]+/, "").trim()
          if (stripped) node.displayName = stripped
        }
      },
    }),
  ],
  right: [
    Component.Graph(),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
      ],
    }),
    // Strip Obsidian sort-order number prefixes from sidebar entries so
    // "0.0 - Home" reads as "Home", "01_Production" reads as "Production",
    // etc. Mirrors the StripNumberPrefix transformer that handles the
    // page-title side; here we transform the Explorer's per-node displayName.
    Component.Explorer({
      mapFn: (node) => {
        // See quartz/util/stripPrefix.ts — strips Obsidian sort-order prefixes
        // ("0.0 - ", "01_", "1.2 ") from displayed names. The regex is inlined
        // here rather than imported because Quartz serializes this function to
        // a string for client-side execution; an external import wouldn't survive.
        if (typeof node.displayName === "string") {
          const stripped = node.displayName.replace(/^\d+(\.\d+)*[\s._\-]+/, "").trim()
          if (stripped) node.displayName = stripped
        }
      },
    }),
  ],
  right: [],
}
