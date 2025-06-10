import { PrismaClient } from '@prisma/client'

// Set default database URL if not provided in environment
process.env.DATABASE_URL = process.env.DATABASE_URL || 'file:./prisma/dev.db'

// PrismaClient is attached to the `global` object in development to prevent
// exhausting your database connection limit.
const globalForPrisma = global as unknown as { prisma: PrismaClient }

export const prisma = globalForPrisma.prisma || 
  new PrismaClient({
    log: ['query', 'error', 'warn'],
  })

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

export default prisma 