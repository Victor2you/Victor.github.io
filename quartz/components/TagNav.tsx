import { FullSlug, resolveRelative } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

const TagNav: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
  const href = resolveRelative(fileData.slug!, "tags" as FullSlug)
  return (
    <a href={href} class={classNames(displayClass, "tag-nav")}>
      전체 글
    </a>
  )
}

TagNav.css = `
.tag-nav {
  display: inline-flex;
  align-items: center;
  flex-shrink: 0;
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--secondary);
  white-space: nowrap;
  padding: 0.3rem 0.7rem;
  margin-left: 0.5rem;
  border: 1px solid var(--lightgray);
  border-radius: 6px;
  text-decoration: none;
  transition: background-color 0.2s ease, color 0.2s ease;
}

.tag-nav:hover {
  background-color: var(--highlight);
  color: var(--tertiary);
}
`

export default (() => TagNav) satisfies QuartzComponentConstructor
