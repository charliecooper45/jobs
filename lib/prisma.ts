import { PrismaClient } from "@prisma/client";

/**
 * PrismaClient is attached to the `global` object in development to prevent
 * exhausting the database connection limit.
 */
declare global {
  var prisma: PrismaClient | undefined;
}

export const prisma = global.prisma || new PrismaClient({ log: ["query"] });

if (process.env.NODE_ENV !== "production") global.prisma = prisma;
