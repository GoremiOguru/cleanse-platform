import { PrismaClient } from "@prisma/client";
import { PrismaLibSql } from "@prisma/adapter-libsql";

const config = {
  url: process.env.DATABASE_URL || "file:./dev.db",
};
const adapter = new PrismaLibSql(config);

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

export const prisma = globalForPrisma.prisma || new PrismaClient({ adapter });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

// Force Turbopack Cache Invalidation
