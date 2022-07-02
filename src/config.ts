export type Config = {
  env: "production" | "development"
  generateProjectsSnapshots: string
}

const config = {
  env: process.env.NODE_ENV,
  generateProjectsSnapshots: process.env.NEXT_PUBLIC_GENERATE_SNAPSHOTS,
}

for (const [key, value] of Object.entries(config)) {
  if (!value) {
    throw new Error(`Environment variable not found: ${key}`)
  }
}

export default config
