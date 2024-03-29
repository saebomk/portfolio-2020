const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/skwon/portfolio-2020/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/skwon/portfolio-2020/src/pages/404.js"))),
  "component---src-pages-condition-builder-js": hot(preferDefault(require("/Users/skwon/portfolio-2020/src/pages/ConditionBuilder.js"))),
  "component---src-pages-full-project-js": hot(preferDefault(require("/Users/skwon/portfolio-2020/src/pages/FullProject.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/skwon/portfolio-2020/src/pages/index.js"))),
  "component---src-pages-pattern-library-js": hot(preferDefault(require("/Users/skwon/portfolio-2020/src/pages/PatternLibrary.js"))),
  "component---src-pages-supplier-invitation-ux-js": hot(preferDefault(require("/Users/skwon/portfolio-2020/src/pages/SupplierInvitationUX.js")))
}

