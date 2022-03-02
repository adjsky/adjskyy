import React from "react"
import { useRouter } from "next/router"
import { NextSeo } from "next-seo"
import Image from "next/image"
import { useTranslation } from "next-i18next"

import { generateTags } from "@/src/seo"

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
  const router = useRouter()
  const { t } = useTranslation(["common", "projects"])

  return (
    <>
      <NextSeo
        {...generateTags(
          t("projects:pageTitle"),
          t("projects:metaContent"),
          router.pathname
        )}
      />
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
