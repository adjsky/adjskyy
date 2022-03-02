import constants from "@/src/constants"

const { host } = constants

export const generateTags = (
  title: string,
  description: string,
  url: string
) => ({
  title,
  description,
  canonical: host + url,
  openGraph: {
    url: host + url,
    title,
    description,
    images: [
      {
        url: "/about_pic.webp",
        width: 640,
        height: 427,
        alt: "Image",
        type: "image/webp",
      },
    ],
  },
})
