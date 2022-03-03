import type { NextRouter } from "next/router"

const locales = ["ru", "en"] as const

export const defaultLocale = "en"

export type LocalesType = typeof locales[number]

export const isLocaleDeclared = (language: string): language is LocalesType => {
  const foundLocale = locales.find(
    (declaredLocale) => language == declaredLocale
  )

  return foundLocale != undefined
}

export const getLocalizedURL = (router: NextRouter) => {
  const localePrefix = router.locale == defaultLocale ? "" : "/" + router.locale

  return localePrefix + router.pathname
}

export default locales
