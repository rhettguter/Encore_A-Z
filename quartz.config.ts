import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz configuration for Encore A–Z, the public knowledge base of
 * Encore Performing Arts. Content lives in /content (synced from the
 * Encoreverse Obsidian vault via sync-vault.py).
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Encore A–Z",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "encore-a-z.pages.dev",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Outfit",
        body: "Outfit",
        code: "JetBrains Mono",
      },
      colors: {
        lightMode: {
          light:       "#FBF8F0",
          lightgray:   "#E8E0CD",
          gray:        "#7E8C95",
          darkgray:    "#4A5C68",
          dark:        "#1F3540",
          secondary:   "#387E7F",
          tertiary:    "#2D6566",
          highlight:   "rgba(56, 126, 127, 0.12)",
          textHighlight: "rgba(56, 126, 127, 0.20)",
        },
        darkMode: {
          light:       "#1F3540",
          lightgray:   "#324554",
          gray:        "#7E8C95",
          darkgray:    "#E8E0CD",
          dark:        "#FBF8F0",
          secondary:   "#5FAFB0",
          tertiary:    "#387E7F",
          highlight:   "rgba(95, 175, 176, 0.15)",
          textHighlight: "rgba(95, 175, 176, 0.25)",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      // Hide Obsidian sort-order number prefixes ("0.0 - ", "01_", "1.2 ")
      // from displayed titles. Filename-derived only — explicit frontmatter
      // `title:` overrides win and are left untouched. See the plugin docstring.
      Plugin.StripNumberPrefix(),
      // Promote "0.0 - <Folder>.md" hub overview docs (and README.md) to be
      // their folder's index page — clicking the folder shows the overview,
      // and the duplicate sidebar entry goes away. Old slug becomes an alias
      // so any inbound links still redirect. See plugin docstring.
      Plugin.PromoteFolderIndex(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
