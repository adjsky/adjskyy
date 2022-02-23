export type TProject = {
  title: string
  imagePath?: string
  description: string
  link: string
}

export type TProjects = {
  own: TProject[]
  involved: TProject[]
}
