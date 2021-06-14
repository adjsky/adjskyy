import React from "react"
import styles from "./Home.module.css"

function Home() {
  return (
    <div className={styles.home}>
      <h1 className={styles.title}>
        I am Kirill Timchenko, a software developer.
      </h1>
      <a href="https://github.com/adjsky" target="_blank" rel="noreferrer" className={styles.link}>
        - CHECK OUT MY APPS -
      </a>
    </div>
  )
}

export default Home
