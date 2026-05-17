import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

const config: QuartzConfig = {
  configuration: {
    pageTitle: "Gajumaru Wiki",
    pageTitleSuffix: " | Gajumaru Wiki",
    enableSPA: true,
    enablePopovers: true,
    analytics: null,
    locale: "en-US",
    baseUrl: process.env.QUARTZ_BASE_URL || "rarestaketech.github.io/GajumaruWiki",
    ignorePatterns: ["private", "templates", ".obsidian", "hot.md", "log.md", "resolved.md"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Schibsted Grotesk",
        body: "Source Sans 3",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#faf9f4",
          lightgray: "#dfddd2",
          gray: "#8c897d",
          darkgray: "#3f443e",
          dark: "#161b18",
          secondary: "#116b68",
          tertiary: "#9a5c2e",
          highlight: "rgba(17, 107, 104, 0.12)",
          textHighlight: "#e9cf6a66",
        },
        darkMode: {
          light: "#111613",
          lightgray: "#29312d",
          gray: "#8c958d",
          darkgray: "#d8ded6",
          dark: "#f5f2e8",
          secondary: "#65c7bd",
          tertiary: "#d39a62",
          highlight: "rgba(101, 199, 189, 0.16)",
          textHighlight: "#9a783d88",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"],
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
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
