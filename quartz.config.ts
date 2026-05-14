import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz configuration for Encore A–Z, the public knowledge base of
 * Encore Performing Arts. Content lives in /content (synced from the
 * Encoreverse Obsidian vault via sync-vault.py).
 *
 * Edit baseUrl after the first Cloudflare deploy so canonical links
 * and the RSS feed point at the right place.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Encore A–Z",
    pageTitleSuffix: " · Encore Performing Arts",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    // TODO: set this to your live URL after first deploy, e.g.
    // baseUrl: "encore-a-z.pages.dev"
    baseUrl: "",
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
          light:       "#FBF8F0",   // page bg (cream-light)
          lightgray:   "#E8E0CD",   // borders, hr (cream-dark)
          gray:        "#7E8C95",   // muted text
          darkgray:    "#4A5C68",   // body text (guava-soft)
          dark:        "#1F3540",   // headings (guava)
          secondary:   "#387E7F",   // links / accents (berry)
          tertiary:    "#2D6566",   // visited links (berry-dark)
          highlight:   "rgba(56, 126, 127, 0.12)", // search highlight
          textHighlight: "rgba(56, 126, 127, 0.20)",
        },
        darkMode: {
          light:       "#1F3540",   // page bg (guava)
          lightgray:   "#324554",
          gray:        "#7E8C95",
          darkgray:    "#E8E0CD",   // body text (cream-dark)
          dark:        "#FBF8F0",   // headings (cream-light)
          secondary:   "#5FAFB0",   // brighter berry for dark mode
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
