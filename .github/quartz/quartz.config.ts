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
    baseUrl: process.env.QUARTZ_BASE_URL || "example.github.io/gajumaru-wiki",
    ignorePatterns: ["private", "templates", ".obsidian", "hot.md"],
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
          light: "#fbfbf8",
          lightgray: "#e4e1d8",
          gray: "#a7a193",
          darkgray: "#4c4b45",
          dark: "#24231f",
          secondary: "#22676f",
          tertiary: "#8f5a32",
          highlight: "rgba(34, 103, 111, 0.14)",
          textHighlight: "#f6d87866",
        },
        darkMode: {
          light: "#171816",
          lightgray: "#34372f",
          gray: "#7f8375",
          darkgray: "#d8d7cf",
          dark: "#f3f0e6",
          secondary: "#7fc5cc",
          tertiary: "#d09b66",
          highlight: "rgba(127, 197, 204, 0.16)",
          textHighlight: "#8f703f88",
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
