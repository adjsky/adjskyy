import React from "react"
import Image from "next/image"
import styles from "./PageFooter.module.css"

function PageFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.row}>
        <small className={styles.copyright}>COPYRIGHT 2021 adjsky</small>
        <ul className={styles.contacts}>
          <li className={styles.contactsElement}>
            <a
              className={styles.contactsLink}
              href="https://vk.com/wannabe2dxd"
              target="_blank"
              rel="noreferrer"
            >
              vk
            </a>
          </li>
          <li className={styles.contactsElement}>
            <Image src="/separator.png" alt="" width={5} height={5} />
          </li>
          <li className={styles.contactsElement}>
            <a
              className={styles.contactsLink}
              href="https://github.com/adjsky/"
              target="_blank"
              rel="noreferrer"
            >
              github
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default PageFooter
