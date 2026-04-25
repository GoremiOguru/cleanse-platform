import { defineConfig } from 'prisma/config'
import { PrismaLibSql } from '@prisma/adapter-libsql'
import 'dotenv/config'

// In Prisma 7, we use 'defineConfig' to tell the CLI how to connect
// We use 'as any' here to bypass a temporary type mismatch on the 'adapter' property during the Vercel build
export default defineConfig({
  datasource: {
    url: process.env.DATABASE_URL!,
  },
  adapter: new PrismaLibSql({
    url: process.env.DATABASE_URL!,
    authToken: process.env.TURSO_AUTH_TOKEN!,
  }),
} as any)