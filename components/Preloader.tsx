import React, { useState, useEffect } from "react"
import { ClipLoader } from "react-spinners"

let firstLoad = true

function Preloader() {
  const [siteLoaded, setSiteLoaded] = useState(!firstLoad)

  useEffect(() => {
    if (firstLoad) {
      const alreadyLoaded = document.readyState == "complete"

      const onLoad = () => {
        setTimeout(() => setSiteLoaded(true), 500)

        firstLoad = false
      }

      if (alreadyLoaded) {
        onLoad()
      } else {
        window.onload = onLoad
      }
    }
  }, [])

  const overlayStyle: React.CSSProperties = {
    animation: siteLoaded && firstLoad ? "fadeOut 0.5s ease-in-out" : "",
    visibility: siteLoaded && !firstLoad ? "hidden" : "visible",
  }

  return (
    <div className="site-overlay" style={overlayStyle}>
      <ClipLoader color="#3b3b3b" loading={!siteLoaded} size={150} />
    </div>
  )
}

export default Preloader
