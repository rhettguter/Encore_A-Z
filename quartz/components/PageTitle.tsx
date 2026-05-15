import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"

const PageTitle: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
  const title = cfg?.pageTitle ?? i18n(cfg.locale).propertyDefaults.title
  const baseDir = pathToRoot(fileData.slug!)
  // Encore wordmark — fills are currentColor, so the SVG adapts to
  // whatever text color the theme sets (dark in light mode, cream in dark mode).
  return (
    <h2 class={classNames(displayClass, "page-title")}>
      <a href={baseDir} aria-label={title}>
        <img
          src={`${baseDir}/static/encore-logo.svg`}
          alt={title}
          class="page-title-logo"
        />
      </a>
    </h2>
  )
}

PageTitle.css = `
.page-title {
  margin: 0;
  font-size: 1.75rem;
}
.page-title a {
  display: inline-block;
  color: var(--dark);
  line-height: 0;
}
.page-title-logo {
  display: block;
  width: 100%;
  max-width: 180px;
  height: auto;
}
`

export default (() => PageTitle) satisfies QuartzComponentConstructor
