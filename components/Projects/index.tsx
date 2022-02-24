import React from "react"
import Head from "next/head"
import Image from "next/image"
import { useTranslation } from "next-i18next"
import styles from "./Projects.module.css"

import type { ProjectsProps } from "./types"
import type { TProject } from "@/src/services/ProjectsProvider/types"

const mapProject = (project: TProject) => (
  <a
    key={project.title}
    className={styles.card}
    href={project.link}
    target="_blank"
    rel="noreferrer"
  >
    <div className={styles.cardPreview}>
      <Image
        src={project.imagePath || "/bg.webp"}
        width={1280}
        height={800}
        alt={project.title}
      />
    </div>
    <div className={styles.cardInfo}>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
    </div>
  </a>
)

function Projects({ projects }: ProjectsProps) {
  const { t } = useTranslation(["common", "projects"])

  return (
    <>
      <Head>
        <title>{t("projects:pageTitle")}</title>
        <meta name="description" content={t("projects:metaContent")} />
      </Head>
      <main className={styles.projects}>
        {projects?.involved && (
          <section className={styles.block}>
            <h2 className={styles.blockTitle}>{t("projects:involved")}</h2>
            <div className={styles.blockGrid}>
              {projects.involved.map((project) => mapProject(project))}
            </div>
          </section>
        )}
        {projects?.own && (
          <section className={styles.block}>
            <h2 className={styles.blockTitle}>{t("projects:own")}</h2>
            <div className={styles.blockGrid}>
              {projects.own.map((project) => mapProject(project))}
            </div>
          </section>
        )}
      </main>
    </>
  )
}

export default Projects
