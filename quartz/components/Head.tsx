import { i18n } from "../i18n"
import { FullSlug, getFileExtension, joinSegments, pathToRoot } from "../util/path"
import { CSSResourceToStyleElement, JSResourceToScriptElement } from "../util/resources"
import { googleFontHref, googleFontSubsetHref } from "../util/theme"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { unescapeHTML } from "../util/escape"
import { CustomOgImagesEmitterName } from "../plugins/emitters/ogImage"
export default (() => {
  const Head: QuartzComponent = ({
    cfg,
    fileData,
    externalResources,
    ctx,
  }: QuartzComponentProps) => {
    const titleSuffix = cfg.pageTitleSuffix ?? ""
    const title =
      (fileData.frontmatter?.title ?? i18n(cfg.locale).propertyDefaults.title) + titleSuffix
    const description =
      fileData.frontmatter?.socialDescription ??
      fileData.frontmatter?.description ??
      unescapeHTML(fileData.description?.trim() ?? i18n(cfg.locale).propertyDefaults.description)

    const { css, js, additionalHead } = externalResources

    const url = new URL(`https://${cfg.baseUrl ?? "example.com"}`)
    const path = url.pathname as FullSlug
    const baseDir = fileData.slug === "404" ? path : pathToRoot(fileData.slug!)
    const iconPath = joinSegments(baseDir, "static/icon.png")

    // Url of current page
    const socialUrl =
      fileData.slug === "404" ? url.toString() : joinSegments(url.toString(), fileData.slug!)

    const usesCustomOgImage = ctx.cfg.plugins.emitters.some(
      (e) => e.name === CustomOgImagesEmitterName,
    )
    const ogImageDefaultPath = `https://${cfg.baseUrl}/static/og-image.png`

    // Article detection: real content pages (not home, 404, tag/folder listings)
    const slug = fileData.slug ?? ""
    const isArticle =
      slug !== "index" &&
      slug !== "404" &&
      !slug.startsWith("tags/") &&
      !slug.endsWith("/index") &&
      fileData.frontmatter?.title !== undefined
    const publishedDate = fileData.dates?.published
    const modifiedDate = fileData.dates?.modified

    const personLd = {
      "@type": "Person",
      "@id": "https://ykcha.com/#person",
      name: "YoonKyung Cha",
      alternateName: ["차윤경", "Victor Cha"],
      jobTitle: "Key Initiatives Lead / Director",
      worksFor: { "@type": "Organization", name: "Honeywell" },
      url: "https://blog.ykcha.com",
      sameAs: [
        "https://ykcha.com",
        "https://github.com/Victor2you",
        "https://www.linkedin.com/in/yoonkyungcha",
        "https://brunch.co.kr/@ykcha",
      ],
    }

    const jsonLd = isArticle
      ? {
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: fileData.frontmatter?.title,
          description: description,
          url: socialUrl,
          inLanguage: cfg.locale,
          mainEntityOfPage: { "@type": "WebPage", "@id": socialUrl },
          datePublished: publishedDate?.toISOString(),
          dateModified: modifiedDate?.toISOString(),
          author: personLd,
          publisher: {
            "@type": "Organization",
            name: "차윤경의 디지털 가든",
            url: `https://${cfg.baseUrl}`,
            logo: { "@type": "ImageObject", url: ogImageDefaultPath },
          },
          image: ogImageDefaultPath,
        }
      : { "@context": "https://schema.org", ...personLd }

    return (
      <head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        {cfg.theme.cdnCaching && cfg.theme.fontOrigin === "googleFonts" && (
          <>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link rel="stylesheet" href={googleFontHref(cfg.theme)} />
            {cfg.theme.typography.title && (
              <link rel="stylesheet" href={googleFontSubsetHref(cfg.theme, cfg.pageTitle)} />
            )}
          </>
        )}
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta name="og:site_name" content={cfg.pageTitle}></meta>
        <meta property="og:title" content={title} />
        <meta property="og:type" content={isArticle ? "article" : "website"} />
        {isArticle && publishedDate && (
          <meta property="article:published_time" content={publishedDate.toISOString()} />
        )}
        {isArticle && modifiedDate && (
          <meta property="article:modified_time" content={modifiedDate.toISOString()} />
        )}
        {isArticle && <meta property="article:author" content="차윤경 YoonKyung Cha" />}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta property="og:description" content={description} />
        <meta property="og:image:alt" content={description} />

        {!usesCustomOgImage && (
          <>
            <meta property="og:image" content={ogImageDefaultPath} />
            <meta property="og:image:url" content={ogImageDefaultPath} />
            <meta name="twitter:image" content={ogImageDefaultPath} />
            <meta
              property="og:image:type"
              content={`image/${getFileExtension(ogImageDefaultPath) ?? "png"}`}
            />
          </>
        )}

        {cfg.baseUrl && (
          <>
            <meta property="twitter:domain" content={cfg.baseUrl}></meta>
            <meta property="og:url" content={socialUrl}></meta>
            <meta property="twitter:url" content={socialUrl}></meta>
          </>
        )}

        <link rel="canonical" href={socialUrl.replace(/\/index$/, "/")} />
        <link rel="icon" href={iconPath} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <meta name="description" content={description} />
        <meta name="generator" content="Quartz" />

        {css.map((resource) => CSSResourceToStyleElement(resource, true))}
        {js
          .filter((resource) => resource.loadTime === "beforeDOMReady")
          .map((res) => JSResourceToScriptElement(res, true))}
        {additionalHead.map((resource) => {
          if (typeof resource === "function") {
            return resource(fileData)
          } else {
            return resource
          }
        })}
      </head>
    )
  }

  return Head
}) satisfies QuartzComponentConstructor
