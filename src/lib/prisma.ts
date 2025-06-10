import { PrismaClient } from '@prisma/client'
import { seedMinimalData } from './seed-data'

// Ensure DATABASE_URL is always set to prevent deployment errors
if (!process.env.DATABASE_URL) {
  console.warn('DATABASE_URL not found, using in-memory SQLite database for Vercel')
  // Use in-memory SQLite for Vercel deployment
  if (process.env.VERCEL) {
    process.env.DATABASE_URL = 'file::memory:?cache=shared'
  } else {
    process.env.DATABASE_URL = 'file:./prisma/dev.db'
  }
}

// PrismaClient is attached to the `global` object in development to prevent
// exhausting your database connection limit.
const globalForPrisma = global as unknown as { prisma: PrismaClient }

export const prisma = globalForPrisma.prisma || 
  new PrismaClient({
    log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
  })

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

// In Vercel production with in-memory database, we need to seed
if (process.env.VERCEL && process.env.NODE_ENV === 'production') {
  seedMinimalData()
    .then(() => console.log('Vercel database seeding complete'))
    .catch(e => console.error('Error seeding Vercel database:', e))
}

export default prisma 