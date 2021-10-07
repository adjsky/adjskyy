import React from "react"
import { useRouter } from "next/router"
import Link from "next/link"
import { useTranslation } from "next-i18next"
import styles from "./PageFooter.module.css"

function PageFooter(): JSX.Element {
  const { t } = useTranslation("footer")
  const router = useRouter()

  return (
    <footer className={styles.footer}>
      <div className={styles.row}>
        <ul className={styles.translations}>
          <li className={styles.translationsElement}>
            <Link href={router.asPath} locale="en">
              <a className={styles.translationsLink}>{t("en")}</a>
            </Link>
          </li>
          <li className={styles.translationsElement}>
            <span className={styles.circle} />
          </li>
          <li className={styles.translationsElement}>
            <Link href={router.asPath} locale="ru">
              <a className={styles.translationsLink}>{t("ru")}</a>
            </Link>
          </li>
        </ul>
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
            <span className={styles.circle} />
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
