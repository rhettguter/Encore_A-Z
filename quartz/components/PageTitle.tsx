import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"

const PageTitle: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
  const title = cfg?.pageTitle ?? i18n(cfg.locale).propertyDefaults.title
  const baseDir = pathToRoot(fileData.slug!)
  // Encore wordmark — rendered as a CSS mask so `background: currentColor`
  // provides the ink. An <img src=.svg> does NOT honor currentColor inside
  // the SVG (the SVG is rendered in its own document context with no parent
  // CSS), which is why the wordmark stayed dark in dark mode despite the SVG
  // having fill="currentColor". Mask + currentColor solves that.
  const maskUrl = `${baseDir}/static/encore-logo.svg`
  return (
    <h2 class={classNames(displayClass, "page-title")}>
      <a href={baseDir} aria-label={title}>
        <span
          class="page-title-logo"
          role="img"
          aria-label={title}
          style={`-webkit-mask-image:url(${maskUrl});mask-image:url(${maskUrl});`}
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
  /* Wordmark viewBox is 427 × 87 — pin the aspect ratio so the masked
     element keeps the logo's proportions without needing a fixed height. */
  aspect-ratio: 427 / 87;
  background-color: currentColor;
  -webkit-mask-repeat: no-repeat;
          mask-repeat: no-repeat;
  -webkit-mask-position: left center;
          mask-position: left center;
  -webkit-mask-size: contain;
          mask-size: contain;
  /* Color follows the parent <a>'s color (var(--dark) in both light + dark
     theme via Quartz's CSS variables — flips automatically). */
}
`

export default (() => PageTitle) satisfies QuartzComponentConstructor
