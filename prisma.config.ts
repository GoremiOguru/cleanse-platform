import { defineConfig } from 'prisma/config'
import { PrismaLibSql } from '@prisma/adapter-libsql'
import 'dotenv/config'

// In Prisma 7, we use 'defineConfig' to tell the CLI how to connect
export default defineConfig({
  datasource: {
    url: process.env.DATABASE_URL!,
  },
  // @ts-ignore - The type definition for PrismaConfig might not yet include 'adapter' in all versions
  adapter: new PrismaLibSql({
    url: process.env.DATABASE_URL!,
    authToken: process.env.TURSO_AUTH_TOKEN!,
  }),
})