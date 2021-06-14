const { useLayoutEffect } = require("react")
const { useLocation } = require("react-router-dom")

function ScrollToTop() {
  const { pathname } = useLocation()
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

module.exports = ScrollToTop
