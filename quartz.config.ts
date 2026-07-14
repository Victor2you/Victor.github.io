import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "차윤경 YoonKyung Cha",
    pageTitleSuffix: " | Pracademic Insights",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "ko-KR",
    baseUrl: "blog.ykcha.com",
    ignorePatterns: ["private", "templates", ".obsidian", "linkedin_*"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Pretendard",
        body: "Noto Sans KR",
        code: "JetBrains Mono",
      },
      colors: {
        lightMode: {
          light: "#f8f9fc",
          lightgray: "#e8eaf0",
          gray: "#9ea3b0",
          darkgray: "#3d4158",
          dark: "#1a1d2e",
          secondary: "#2d5be3",
          tertiary: "#5b8dee",
          highlight: "rgba(45, 91, 227, 0.08)",
          textHighlight: "#ffd70066",
        },
        darkMode: {
          light: "#0f1117",
          lightgray: "#1e2235",
          gray: "#4a5068",
          darkgray: "#c8cde0",
          dark: "#eef0f8",
          secondary: "#5b8dee",
          tertiary: "#c9a84c",
          highlight: "rgba(91, 141, 238, 0.12)",
          textHighlight: "#c9a84c44",
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
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest", openLinksInNewTab: false, lazyLoad: true }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts(), Plugin.ExplicitPublish()],
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
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
