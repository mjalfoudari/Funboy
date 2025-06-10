import { PrismaClient } from '@prisma/client'

// This function seeds minimal data for production if needed
export async function seedMinimalData() {
  const prisma = new PrismaClient()
  
  try {
    // Only seed if there are no categories yet
    const categoriesCount = await prisma.category.count()
    
    if (categoriesCount === 0) {
      console.log('Seeding minimal data for production environment...')
      
      // Create basic categories
      await prisma.category.createMany({
        data: [
          { 
            name: 'Pool Floats', 
            slug: 'pool-floats',
            description: 'Luxury pool floats for relaxation',
            sortOrder: 1
          },
          { 
            name: 'Kids', 
            slug: 'kids',
            description: 'Pool floats and toys for kids',
            sortOrder: 2
          },
          { 
            name: 'Accessories', 
            slug: 'accessories',
            description: 'Pool accessories and more',
            sortOrder: 3
          },
        ]
      })
      
      console.log('Minimal data seeding complete')
    } else {
      console.log('Database already has data, skipping seed')
    }
  } catch (error) {
    console.error('Error seeding database:', error)
  } finally {
    await prisma.$disconnect()
  }
} 