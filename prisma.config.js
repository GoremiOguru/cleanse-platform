const { defineConfig } = require('prisma/config');
const { PrismaLibSql } = require('@prisma/adapter-libsql');
require('dotenv').config();

// In Prisma 7, we use 'defineConfig' to tell the CLI how to connect
// We use .js extension to bypass strict TypeScript type-checking on Vercel
module.exports = defineConfig({
  datasource: {
    url: process.env.DATABASE_URL,
  },
  adapter: new PrismaLibSql({
    url: process.env.DATABASE_URL,
    authToken: process.env.TURSO_AUTH_TOKEN,
  }),
});
