import React from "react"
import Head from "next/head"
import { useTranslation } from "next-i18next"
import styles from "./Resume.module.css"

function Home(): JSX.Element {
  const { t } = useTranslation(["common", "resume"])

  return (
    <>
      <Head>
        <title>{t("resume:pageTitle")}</title>
        <meta name="description" content={t("resume:metaContent")} />
      </Head>
      <main className={styles.resume}>
        <div className={styles.container}>
          <h1>
            <span>{t("resume:name")}</span>
            <br className={styles.breaker} />
            <small>
              <a href="mailto:infiernodelotroel@gmail.com">
                infiernodelotroel@gmail.com
              </a>
              <span className={styles.separator}> | </span>
              <a href="https://telegram.me/adjsky">@adjsky</a>
            </small>
          </h1>
          <hr />
          <div className={styles.row}>
            <div className={styles.rowTitle}>
              <h2>{t("resume:experience")}</h2>
            </div>
            <div className={styles.block}>
              <h3>
                <span>{t("resume:confidential")}</span>{" "}
                <br className={styles.breaker} />
                <small>{t("resume:confidentialPeriod")}</small>
              </h3>
              <ul>
                <li>{t("resume:confidentialp1")}</li>
                <li>{t("resume:confidentialp2")}</li>
                <li>{t("resume:confidentialp3")}</li>
                <li>{t("resume:confidentialp4")}</li>
                <li>{t("resume:confidentialp5")}</li>
                <li>{t("resume:confidentialp6")}</li>
              </ul>
              <hr />
              <h3>
                <span>ProdCreators</span> <br className={styles.breaker} />
                <small>{t("resume:prodcreatorsPeriod")}</small>
              </h3>
              <ul>
                <li>{t("resume:prodcreatorsp1")}</li>
                <li>{t("resume:prodcreatorsp2")}</li>
                <li>{t("resume:prodcreatorsp3")}</li>
                <li>{t("resume:prodcreatorsp4")}</li>
                <li>{t("resume:prodcreatorsp5")}</li>
              </ul>
              <hr />
              <h3>
                <span>{t("resume:freelance")}</span>{" "}
                <br className={styles.breaker} />
                <small>{t("resume:freelancePeriod")}</small>
              </h3>
              <ul>
                <li>{t("resume:freelancep1")}</li>
                <li>{t("resume:freelancep2")}</li>
              </ul>
            </div>
          </div>
          <hr />
          <div className={styles.row}>
            <div className={styles.rowTitle}>
              <h2>{t("resume:techSkills")}</h2>
            </div>
            <div className={styles.block}>
              <h3>{t("resume:progLang")}</h3>
              <ul>
                <li>JavaScript / TypeScript</li>
                <li>Golang</li>
                <li>Python</li>
                <li>Bash</li>
                <li>C++</li>
              </ul>
              <hr />
              <h3>{t("resume:techandframework")}</h3>
              <ul>
                <li>React / Preact & Redux Toolkit & RTK Query</li>
                <li>React Hook Form</li>
                <li>Next.js</li>
                <li>next-i18next / react-i18next</li>
                <li>Docker / docker-compose</li>
                <li>HTML5 & CSS3 & PWA & SPA</li>
                <li>Express</li>
                <li>Qt5 / Qt6 & Qt QML</li>
              </ul>
            </div>
          </div>
          <hr />
          <div className={styles.row}>
            <div className={styles.rowTitle}>
              <h2>{t("resume:education")}</h2>
            </div>
            <div className={styles.block}>
              <h3>{t("resume:incompleteHigher")}</h3>
              <p>
                {t("resume:university")} <br />
                {t("resume:faculty")}
              </p>
            </div>
          </div>
          <hr />
          <div className={styles.row}>
            <div className={styles.rowTitle}>
              <h2>{t("resume:languages")}</h2>
            </div>
            <div className={styles.block}>
              <h3>{t("resume:russian")}</h3>
              <p>{t("resume:native")}</p>
              <hr />
              <h3>{t("resume:english")}</h3>
              <p>B2 | CEFR</p>
            </div>
          </div>
          <hr />
          <div className={styles.row}>
            <div className={styles.rowTitle}>
              <h2>{t("resume:cert")}</h2>
            </div>
            <div className={styles.block}>
              <h3>{t("resume:cert1")}</h3>
              <p>
                <a href="https://www.freecodecamp.org/certification/adjsky/javascript-algorithms-and-data-structures">
                  {t("resume:link")}
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Home
