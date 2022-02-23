import React, { useState, useEffect } from "react"
import { ClipLoader } from "react-spinners"

function Preloader() {
  const [siteLoaded, setSiteLoaded] = useState(false)

  useEffect(() => {
    const alreadyLoaded = document.readyState == "complete"

    const onLoad = () => {
      setTimeout(() => setSiteLoaded(true), 500)
    }

    if (alreadyLoaded) {
      onLoad()
    } else {
      window.onload = onLoad
    }
  }, [])

  const overlayStyle: React.CSSProperties = {
    animation: siteLoaded ? "fadeOut 0.5s ease-in-out" : "",
    visibility: siteLoaded ? "hidden" : "visible",
  }

  return (
    <div className="site-overlay" style={overlayStyle}>
      <ClipLoader color="#3b3b3b" loading={!siteLoaded} size={150} />
    </div>
  )
}

export default Preloader
