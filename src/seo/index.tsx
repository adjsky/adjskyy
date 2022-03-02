import constants from "@/src/constants"

import locales from "../locales"

import type { NextSeoProps } from "next-seo"

const { host } = constants

export const generateTags = (
  title: string,
  description: string,
  url: string
): NextSeoProps => ({
  title,
  description,
  canonical: host + url,
  languageAlternates: locales.map((locale) => ({
    hrefLang: locale,
    href: host + "/" + locale + url,
  })),
  openGraph: {
    url: host + url,
    title,
    description,
    images: [
      {
        url: host + "/about_pic.png",
        width: 640,
        height: 427,
        alt: "Image",
        type: "image/png",
      },
    ],
  },
})
