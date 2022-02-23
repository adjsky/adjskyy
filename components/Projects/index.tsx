import React from "react"
import { useTranslation } from "next-i18next"
import styles from "./Projects.module.css"

import type { ProjectsProps } from "./types"

function Projects({ projects }: ProjectsProps) {
  const { t } = useTranslation(["common", "projects"])

  return (
    <div className={styles.projects}>
      <h1>{t("projects:title")}</h1>
    </div>
  )
}

export default Projects
