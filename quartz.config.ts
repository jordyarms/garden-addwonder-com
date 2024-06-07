import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4.0 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Garden",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "garden.addwonder.com",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "created",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Noto Sans",
        body: "Noto Sans",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light:  "rgba(251, 255, 248, 1)", // background "#faf8f8",
          lightgray: "rgba(108, 149, 215, 1)",// "rgba(225, 229, 222, 1)", // scaffold  "#e5e5e5",
          gray: "rgba(33, 33, 108, 1)", // blocking  dark blue "#b8b8b8",
          darkgray: "rgba(33, 33, 108, 1)", // body text - dark blue "#4e4e4e",
          dark: "rgba(53, 53, 128, 1)", // headers and icons - dark blue "#2b2b2b",
          secondary: "rgba(249, 79, 117, 1)", // links and active -- bright pink swap "#284b63",
          tertiary:  "rgba(108, 149, 215, 1)", // hover state -- Light Blue Swap  "#84a59d",
          highlight: "rgba(143, 159, 169, 0.15)",
        },
        darkMode: {
          light:  "rgba(3, 3, 78, 1)", // background -- dark gray "#161618",
          lightgray: "rgba(108, 149, 215, 1)", // scaffold -- "#393639",
          gray: "#646464", // blocking --
          darkgray: "#d4d4d4", // text body --
          dark: "rgba(251, 255, 248, 1)", // "#ebebec", // headers and icons -- 
          secondary: "rgba(249, 79, 117, 1)", // links -- bright pink swap "#7b97aa",
          tertiary: "rgba(108, 149, 215, 1)", // hover state -- Light Blue Swap "#84a59d",
          highlight: "rgba(143, 159, 169, 0.15)",
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
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
