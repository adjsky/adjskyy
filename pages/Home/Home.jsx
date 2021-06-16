import React from "react"
import Head from "next/head"
import styles from "./Home.module.css"

function Home() {
  return (
    <>
      <Head>
        <title>adjsky | Home</title>
        <meta name="description" content="Here you can look at adjsky's portfolio." />
      </Head>
      <div className={styles.home}>
        <h1 className={styles.title}>
          I am Kirill Timchenko, a software developer.
        </h1>
        <a href="https://github.com/adjsky" target="_blank" rel="noreferrer" className={styles.link}>
          - CHECK OUT MY APPS -
        </a>
      </div>
    </>
  )
}

export default Home
