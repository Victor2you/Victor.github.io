import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

export default (() => {
  const Comments: QuartzComponent = ({ fileData }: QuartzComponentProps) => {
    const slug = fileData.slug
    // Do not render comments on index, folder index, or tag pages
    if (!slug || slug === "index" || slug.endsWith("/index") || slug.startsWith("tags/")) {
      return null
    }

    return (
      <div class="comments-container" style="margin-top: 3rem; border-top: 1px solid var(--lightgray); padding-top: 2rem;">
        <iframe
          id="comments-iframe"
          src={`https://board.ykcha.com/comments?postSlug=${slug}`}
          width="100%"
          height="650px"
          style="border: none;"
          scrolling="no"
          loading="lazy"
        ></iframe>
        <script dangerouslySetInnerHTML={{ __html: `
          window.addEventListener('message', (event) => {
            if (event.origin === 'https://board.ykcha.com' && event.data?.type === 'comment_added') {
              const iframe = document.getElementById('comments-iframe');
              if (iframe) {
                const url = new URL(iframe.src);
                url.searchParams.set('_r', Date.now().toString());
                iframe.src = url.toString();
              }
            }
          });
        `}} />
      </div>
    )
  }

  return Comments
}) satisfies QuartzComponentConstructor
