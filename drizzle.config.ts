import 'dotenv/config'

import type { Config } from 'drizzle-kit'
export default {
  driver: 'mysql2',
  out: './migrations',
  schema: './src/db/schema',
  dbCredentials: {
    uri: `${process.env.DATABASE_URL}`,
  },
} satisfies Config
