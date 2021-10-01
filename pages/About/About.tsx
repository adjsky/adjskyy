import React from "react"
import Image from "next/image"
import Head from "next/head"
import { useTranslation } from "next-i18next"
import styles from "./About.module.css"

function About(): JSX.Element {
  const { t } = useTranslation(["common", "about"])
  return (
    <>
      <Head>
        <title>{t("about:pageTitle")}</title>
        <meta name="description" content={t("about:metaContent")} />
      </Head>
      <div className={styles.about}>
        <div className={styles.aboutTechWrap}>
          <section className={styles.aboutCol}>
            <h2 className={styles.title}>{t("about:title")}</h2>
            <Image src="/about_pic.jpg" width={640} height={427} layout="responsive" quality={100} />
            <div className={styles.aboutInfoWrap}>
              <p className={styles.aboutInfo}>
                {t("about:info1")}
              </p>
              <p className={styles.aboutInfo}>
                {t("about:info2")}
              </p>
              <p className={styles.aboutInfo}>
                {t("about:info3")}
              </p>
            </div>
          </section>
          <section className={styles.techCol}>
            <h2 className={styles.title}>{t("about:techTitle")}</h2>
            <ul className={styles.techList}>
              <li className={styles.techListElement}>
                <h3 className={styles.techTitle}>{t("about:backendTitle")}</h3>
                <p className={styles.techInfo}>
                  {t("about:backendInfo1")}
                  &nbsp;
                  <a
                    className={styles.techInfoLink}
                    href="https://github.com/adjsky/fetchapp_server"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {t("hereLink")}
                  </a>
                  .&nbsp;
                  {t("about:backendInfo2")}
                  &nbsp;
                  <a
                    className={styles.techInfoLink}
                    href="https://adjsky.site/api"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {t("hereLink")}
                  </a>
                  .
                </p>
              </li>
              <li className={styles.techListElement}>
                <h3 className={styles.techTitle}>{t("about:frontendTitle")}</h3>
                <p className={styles.techInfo}>
                  {t("about:frontendInfo1")}
                  &nbsp;
                  <a
                    className={styles.techInfoLink}
                    href="https://github.com/adjsky/fetchapp_frontend"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {t("hereLink")}
                  </a>
                  .
                </p>
              </li>
              <li className={styles.techListElement}>
                <h3 className={styles.techTitle}>{t("about:scriptTitle")}</h3>
                <p className={styles.techInfo}>
                  {t("about:scriptInfo1")}
                  &nbsp;
                  <a
                    className={styles.techInfoLink}
                    href="https://github.com/adjsky/university_position_parser"
                    target="_blank"
                    rel="noreferrer"
                  >{t("hereLink")}</a>
                  .
                </p>
              </li>
              <li className={styles.techListElement}>
                <h3 className={styles.techTitle}>{t("about:desktopTitle")}</h3>
                <p className={styles.techInfo}>
                  {t("about:desktopInfo1")}
                  &nbsp;
                  <a
                    className={styles.techInfoLink}
                    href="https://github.com/adjsky/fetchapp"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {t("hereLink")}
                  </a>
                  .&nbsp;
                  {t("about:desktopInfo2")}
                  &nbsp;
                  <a
                    className={styles.techInfoLink}
                    href="https://github.com/adjsky/terraria_clone"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {t("hereLink")}
                  </a>
                  .&nbsp;
                  {t("about:desktopInfo3")}
                </p>
              </li>
            </ul>
          </section>
        </div>
        <div className={styles.contactQuoteWrap}>
          <section className={styles.contactCol}>
            <h2 className={styles.title}>{t("about:contactTitle")}</h2>
            <ul className={styles.contacts}>
              <li className={styles.contactsElement}>
                <h3 className={styles.contactTitle}>{t("about:socialTitle")}</h3>
                <ul className={styles.contactList}>
                  <li className={styles.contactListElement}>
                    <a
                      className={styles.contactLink}
                      href="https://vk.com/wannabe2dxd"
                      target="_blank"
                      rel="noreferrer"
                    >
                      vk
                    </a>
                  </li>
                  <li className={styles.contactListElement}>
                    <a
                      className={styles.contactLink}
                      href="https://www.instagram.com/adjskyy"
                      target="_blank"
                      rel="noreferrer"
                    >
                      instagram
                    </a>
                  </li>
                  <li className={styles.contactListElement}>
                    <a
                      className={styles.contactLink}
                      href="https://github.com/adjsky"
                      target="_blank"
                      rel="noreferrer"
                    >
                      github
                    </a>
                  </li>
                </ul>
              </li>
              <li className={styles.contactsElement}>
                <h3 className={styles.contactTitle}>{t("about:freelanceTitle")}</h3>
                <ul className={styles.contactList}>
                  <li className={styles.contactListElement}>
                    <a
                      className={styles.contactLink}
                      href="https://www.fiverr.com/users/adjsky"
                      target="_blank"
                      rel="noreferrer"
                    >
                      fiverr
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <p className={styles.contactInfo}>
              {t("about:contactInfo1")}
              &nbsp;
              <span className={styles.contactDirect}>lopr1965@gmail.com</span>
              &nbsp;
              {t("about:contactInfo2")}
              &nbsp;
              <span className={styles.contactDirect}>@adjsky</span>
            </p>
          </section>
          <div className={styles.education}>
            {t("about:educationInfo")}
          </div>
          <figure className={styles.quoteFigure}>
            <blockquote className={styles.quote}>
              {t("about:marilynMonroeQuote")}
            </blockquote>
            <figcaption className={styles.quoteCaption}>
              -
              &nbsp;
              {t("about:marilynMonroe")}
            </figcaption>
          </figure>
        </div>
      </div>
    </>
  )
}

export default About
