import React from "react"
import { useRouter } from "next/router"
import { NextSeo } from "next-seo"
import { useTranslation } from "next-i18next"

import { generateTags } from "@/src/seo"
import { getLocalizedURL } from "@/src/locales"

import styles from "./Resume.module.css"

const jobs = [
  { name: "confidential", items: 9 },
  { name: "assetux", items: 4 },
  { name: "flashback", items: 3 },
  { name: "prodcreators", items: 2 },
  { name: "freelance", items: 2 },
]

function Home(): JSX.Element {
  const router = useRouter()
  const { t } = useTranslation(["common", "resume"])

  return (
    <>
      <NextSeo
        {...generateTags(
          t("resume:pageTitle"),
          t("resume:metaContent"),
          getLocalizedURL(router)
        )}
      />
      <main className={styles.resume}>
        <div className={styles.container}>
          <h1>
            <span>{t("resume:name")}</span>
            <br className={styles.breaker} />
            <small>
              <a href="mailto:igorlfmartins@mail.ru">igorlfmartins@mail.ru</a>
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
              {jobs.map((job, index) => (
                <React.Fragment key={index}>
                  <h3>
                    <span>{t(`resume:${job.name}`)}</span>{" "}
                    <br className={styles.breaker} />
                    <small>{t(`resume:${job.name}Period`)}</small>
                  </h3>
                  <ul>
                    {Array.from({ length: job.items }).map((_, index) => (
                      <li key={index}>
                        {t(`resume:${job.name}p${index + 1}`)}
                      </li>
                    ))}
                  </ul>
                  {index != jobs.length - 1 && <hr />}
                </React.Fragment>
              ))}
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
              </ul>
              <hr />
              <h3>{t("resume:techandframework")}</h3>
              <ul>
                <li>
                  Next.js & React / Preact & Redux Toolkit & RTK Query & Jotai
                </li>
                <li>React Hook Form & NextAuth.js & React Query</li>
                <li>
                  Tailwind CSS & styled-components & Radix UI & Headless UI &
                  daisyUI
                </li>
                <li>Docker / docker-compose</li>
                <li>Express / Fastify & tRPC & prisma</li>
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
