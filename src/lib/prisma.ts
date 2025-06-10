import { PrismaClient } from '@prisma/client'

// Ensure DATABASE_URL is always set to prevent deployment errors
if (!process.env.DATABASE_URL) {
  console.warn('DATABASE_URL not found, using default SQLite database path')
  process.env.DATABASE_URL = 'file:./prisma/dev.db'
}

// PrismaClient is attached to the `global` object in development to prevent
// exhausting your database connection limit.
const globalForPrisma = global as unknown as { prisma: PrismaClient }

export const prisma = globalForPrisma.prisma || 
  new PrismaClient({
    log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
  })

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

export default prisma 