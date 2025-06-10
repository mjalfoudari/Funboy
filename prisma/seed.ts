import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Clear existing data
  await prisma.productImage.deleteMany()
  await prisma.productVariant.deleteMany()
  await prisma.product.deleteMany()
  await prisma.category.deleteMany()
  await prisma.adminSettings.deleteMany()

  // Create categories
  const categories = await Promise.all([
    prisma.category.create({
      data: {
        name: 'Pool Floats',
        slug: 'pool-floats',
        description: 'Luxury inflatable pool floats and loungers',
        sortOrder: 1,
      },
    }),
    prisma.category.create({
      data: {
        name: 'Fabric Floats',
        slug: 'fabric-floats',
        description: 'Premium fabric-covered pool floats',
        sortOrder: 2,
      },
    }),
    prisma.category.create({
      data: {
        name: 'Kids',
        slug: 'kids',
        description: 'Fun pool floats and toys for kids',
        sortOrder: 3,
      },
    }),
    prisma.category.create({
      data: {
        name: 'Leisure Islands',
        slug: 'leisure-islands',
        description: 'Large floating islands and docks',
        sortOrder: 4,
      },
    }),
    prisma.category.create({
      data: {
        name: 'Paddle Boards',
        slug: 'paddle-boards',
        description: 'Inflatable stand up paddle boards',
        sortOrder: 5,
      },
    }),
    prisma.category.create({
      data: {
        name: 'Movie Screen',
        slug: 'movie-screen',
        description: 'Outdoor inflatable movie screens',
        sortOrder: 6,
      },
    }),
    prisma.category.create({
      data: {
        name: 'Tanning Pools',
        slug: 'tanning-pools',
        description: 'Shallow pools for tanning and lounging',
        sortOrder: 7,
      },
    }),
    prisma.category.create({
      data: {
        name: 'Accessories',
        slug: 'accessories',
        description: 'Beach towels, pumps, and other accessories',
        sortOrder: 8,
      },
    }),
  ])

  // Create comprehensive product catalog from funboy.com
  const products = [
    // Pool Floats
    {
      name: 'Giant Cabana Island',
      slug: 'giant-cabana-island',
      description: 'The ultimate luxury pool float featuring a massive cabana with shade, cup holders, and space for multiple people. Perfect for pool parties and relaxation.',
      price: 1399.00,
      comparePrice: null,
      sku: 'FUNBOY-GCI-001',
      inventory: 50,
      isActive: true,
      isFeatured: true,
      categoryId: categories[0].id, // Pool Floats
      images: [
        'https://www.funboy.com/cdn/shop/files/Giant-Cabana_1-min_1440x.png?v=1749507997',
        'https://www.funboy.com/cdn/shop/files/Giant-Cabana_2-min_1440x.png?v=1749507996'
      ]
    },
    {
      name: 'Floating Cabana Bar',
      slug: 'floating-cabana-bar-yellow',
      description: 'Stay cool and hydrated with this floating drink station featuring a striped canopy and multiple cup holders.',
      price: 79.00,
      comparePrice: null,
      sku: 'FUNBOY-FCB-YEL',
      inventory: 150,
      isActive: true,
      isFeatured: true,
      categoryId: categories[0].id,
      images: [
        'https://www.funboy.com/cdn/shop/files/FLOATBAR-YELLOW-min_1440x.png?v=1727988636',
        'https://www.funboy.com/cdn/shop/products/FUNBOY-Yellow-Cabana-Floating-Bar-Float-1-min_1440x.jpg?v=1687359246'
      ]
    },
    {
      name: 'Floating Cabana Bar Navy',
      slug: 'floating-cabana-bar-navy',
      description: 'Classic navy and white striped floating bar with shade canopy and drink holders.',
      price: 79.00,
      comparePrice: null,
      sku: 'FUNBOY-FCB-NAV',
      inventory: 150,
      isActive: true,
      isFeatured: false,
      categoryId: categories[0].id,
      images: [
        'https://www.funboy.com/cdn/shop/files/FLOATBAR-NAVY-min_1440x.png?v=1727988512',
        'https://www.funboy.com/cdn/shop/files/funboy-navy-cabana-bar-6-min_1440x.png?v=1712340956'
      ]
    },
    {
      name: 'Airplane Pool Float',
      slug: 'airplane-pool-float',
      description: 'Take flight in style with this private jet inspired pool float featuring realistic details and comfortable seating.',
      price: 99.00,
      comparePrice: null,
      sku: 'FUNBOY-PLANE-001',
      inventory: 0, // Sold out
      isActive: true,
      isFeatured: false,
      categoryId: categories[0].id,
      images: [
        'https://www.funboy.com/cdn/shop/files/PLANE-19_1440x.png?v=1727990982',
        'https://www.funboy.com/cdn/shop/products/Plane-Pool-Float-FUNBOY_1440x.jpg?v=1719413084'
      ]
    },
    {
      name: 'Cabana Dayclub Float Blue',
      slug: 'cabana-dayclub-float-blue',
      description: 'Massive 10ft x 7ft dayclub float with built-in shade and luxury features for the ultimate pool experience.',
      price: 399.00,
      comparePrice: null,
      sku: 'FUNBOY-CDC-BLUE',
      inventory: 25,
      isActive: true,
      isFeatured: true,
      categoryId: categories[0].id,
      images: [
        'https://www.funboy.com/cdn/shop/files/DAYCLUB-BLUE-min_1440x.png?v=1727988296',
        'https://www.funboy.com/cdn/shop/products/Giant-Blue-Dayclub-Cabana-1-min_1440x.jpg?v=1719069222'
      ]
    },

    // Fabric Floats
    {
      name: 'Fabric Sunbed Lounger Yellow Stripe',
      slug: 'fabric-sunbed-lounger-yellow-stripe',
      description: 'Premium fabric-covered pool float with yellow cabana stripes. Ultra-comfortable and stylish for luxury poolside lounging.',
      price: 199.00,
      comparePrice: null,
      sku: 'FUNBOY-FSL-YEL',
      inventory: 100,
      isActive: true,
      isFeatured: true,
      categoryId: categories[1].id, // Fabric Floats
      images: [
        'https://www.funboy.com/cdn/shop/files/SUNBED-YELLOW-STRIPE_1440x.png?v=1744821859',
        'https://www.funboy.com/cdn/shop/files/FUNBOY-Yellow-Fabric-Covered-Pool-Float-1-min_1440x.png?v=1714585477'
      ]
    },
    {
      name: 'Fabric Sunbed Lounger Navy Stripe',
      slug: 'fabric-sunbed-lounger-navy-stripe',
      description: 'Elegant navy and white striped fabric-covered lounger with premium comfort and sophisticated style.',
      price: 199.00,
      comparePrice: null,
      sku: 'FUNBOY-FSL-NAV',
      inventory: 100,
      isActive: true,
      isFeatured: true,
      categoryId: categories[1].id,
      images: [
        'https://www.funboy.com/cdn/shop/files/Fabric-PDP_Sunbed_3-min_1440x.png?v=1744821811',
        'https://www.funboy.com/cdn/shop/files/Fabric-PDP_Sunbed_Navy4-min_1440x.png?v=1744691038'
      ]
    },
    {
      name: 'Fabric Sunbed Lounger Navy Solid',
      slug: 'fabric-sunbed-lounger-navy-solid',
      description: 'Sophisticated solid navy fabric lounger with premium materials and exceptional comfort.',
      price: 179.00,
      comparePrice: 199.00,
      sku: 'FUNBOY-FSL-NAVY',
      inventory: 75,
      isActive: true,
      isFeatured: false,
      categoryId: categories[1].id,
      images: [
        'https://www.funboy.com/cdn/shop/files/SUNBED-NAVY_1440x.png?v=1744821874',
        'https://www.funboy.com/cdn/shop/files/FUNBOY-Navy-Fabric-Covered-Pool-Float-3-min_1440x.png?v=1714591025'
      ]
    },
    {
      name: 'Double Fabric Lounger Yellow',
      slug: 'double-fabric-lounger-yellow',
      description: 'Extra-large 2-person fabric lounger perfect for couples or friends to relax together in style.',
      price: 219.00,
      comparePrice: 249.00,
      sku: 'FUNBOY-DFL-YEL',
      inventory: 40,
      isActive: true,
      isFeatured: true,
      categoryId: categories[1].id,
      images: [
        'https://www.funboy.com/cdn/shop/files/XL-Sunbed_Yellow_1-min_1440x.png?v=1744993245',
        'https://www.funboy.com/cdn/shop/files/XL-Sunbed_Yellow_2-min_1440x.png?v=1744993245'
      ]
    },
    {
      name: 'Fabric Classic Mat Lounger',
      slug: 'fabric-classic-mat-lounger',
      description: 'Flat fabric lounger perfect for sunbathing and relaxation with premium comfort materials.',
      price: 179.00,
      comparePrice: null,
      sku: 'FUNBOY-FCM-001',
      inventory: 80,
      isActive: true,
      isFeatured: false,
      categoryId: categories[1].id,
      images: [
        'https://www.funboy.com/cdn/shop/files/New-Fabric-PDPFLAT-LNGR-YELLOW-STRIPE_1-min_1440x.png?v=1746219918',
        'https://www.funboy.com/cdn/shop/files/New-Fabric-PDPFLAT-LNGR-YELLOW-STRIPE_2-min_1440x.png?v=1746219918'
      ]
    },
    {
      name: 'Fabric Pool Hammock Yellow',
      slug: 'fabric-pool-hammock-yellow',
      description: 'Unique fabric-covered pool hammock for the ultimate relaxation experience in the water.',
      price: 79.00,
      comparePrice: null,
      sku: 'FUNBOY-FPH-YEL',
      inventory: 90,
      isActive: true,
      isFeatured: false,
      categoryId: categories[1].id,
      images: [
        'https://www.funboy.com/cdn/shop/files/New-Fabric-PDPPOOL-HMMK-YELLOW-STRIPE_1-min_1440x.png?v=1746644275',
        'https://www.funboy.com/cdn/shop/files/New-Fabric-PDPPOOL-HMMK-YELLOW-STRIPE_3-min_1440x.png?v=1746644328'
      ]
    },
    {
      name: 'Fabric Pool Hammock Navy',
      slug: 'fabric-pool-hammock-navy',
      description: 'Classic navy fabric pool hammock combining style and comfort for water relaxation.',
      price: 79.00,
      comparePrice: null,
      sku: 'FUNBOY-FPH-NAV',
      inventory: 90,
      isActive: true,
      isFeatured: false,
      categoryId: categories[1].id,
      images: [
        'https://cdn.shopify.com/s/files/1/0787/7015/files/New-Fabric-PDPPOOL-HMMK-NAVY_1-min_400x400.png?v=1746643836'
      ]
    },

    // Kids Products
    {
      name: 'Hot Wheels Kids Air Mattress 2-Pack',
      slug: 'hot-wheels-kids-air-mattress-2pack',
      description: 'Licensed Hot Wheels sleepover bed air mattresses perfect for kids sleepovers and camping adventures.',
      price: 139.00,
      comparePrice: 158.00,
      sku: 'FUNBOY-HW-BED-2PK',
      inventory: 60,
      isActive: true,
      isFeatured: true,
      categoryId: categories[2].id, // Kids
      images: [
        'https://www.funboy.com/cdn/shop/files/HW-BED-RACECAR-BNDL_1440x.png?v=1727913264',
        'https://www.funboy.com/cdn/shop/files/HW-BED-RACECAR-4-min_1440x.png?v=1728155283'
      ]
    },
    {
      name: 'Barbie Bubblegum Tube Float',
      slug: 'barbie-bubblegum-tube-float',
      description: 'Official Barbie Movie inflatable tube float in iconic pink and blue bubblegum colors.',
      price: 29.00,
      comparePrice: null,
      sku: 'FUNBOY-BRB-TUBE',
      inventory: 200,
      isActive: true,
      isFeatured: true,
      categoryId: categories[2].id,
      images: [
        'https://www.funboy.com/cdn/shop/files/FUNBOY-BARBIE-BUBBLEGUM-TUBE-FLOAT-1-min_ccfa3b11-2a86-45c0-99bc-d04c33a34c3b_1440x.png?v=1727985354',
        'https://www.funboy.com/cdn/shop/files/FUNBOY-Barbie-Bubblegum-tube-Float-min_1_1440x.jpg?v=1712261805'
      ]
    },
    {
      name: 'Hot Wheels Collection Bundle',
      slug: 'hot-wheels-collection-bundle',
      description: 'Complete Hot Wheels pool float collection featuring multiple licensed designs and accessories.',
      price: 149.00,
      comparePrice: 160.00,
      sku: 'FUNBOY-HW-BUNDLE',
      inventory: 30,
      isActive: true,
      isFeatured: true,
      categoryId: categories[2].id,
      images: [
        'https://www.funboy.com/cdn/shop/files/HW-BNDL-min_1440x.png?v=1727913527',
        'https://www.funboy.com/cdn/shop/files/FUNBOY-HW-COLLECTION-1-min_1440x.png?v=1713838518'
      ]
    },
    {
      name: 'Barbie Beach Ball',
      slug: 'barbie-beach-ball',
      description: 'Vintage-inspired Barbie inflatable beach ball perfect for pool games and beach fun.',
      price: 14.00,
      comparePrice: null,
      sku: 'FUNBOY-BRB-BALL',
      inventory: 0, // Sold out
      isActive: true,
      isFeatured: false,
      categoryId: categories[2].id,
      images: [
        'https://www.funboy.com/cdn/shop/files/FUNBOY-BRB-Beach-Ball_1440x.png?v=1727913668',
        'https://www.funboy.com/cdn/shop/files/edit-BVH_Funboy_Barbie-3275-min_1440x.jpg?v=1715189482'
      ]
    },

    // Leisure Islands
    {
      name: 'Leisure Island Backrest Water Hammock',
      slug: 'leisure-island-backrest-water-hammock',
      description: 'Premium dropstitch floating dock with integrated water hammock and backrest for ultimate relaxation.',
      price: 599.00,
      comparePrice: 699.00,
      sku: 'FUNBOY-LI-HAMMOCK',
      inventory: 15,
      isActive: true,
      isFeatured: true,
      categoryId: categories[3].id, // Leisure Islands
      images: [
        'https://www.funboy.com/cdn/shop/files/Dropstitch_On-White_4-min_5353218a-b65f-49cb-ac1e-3a2b9391e21e_1440x.png?v=1746745938',
        'https://www.funboy.com/cdn/shop/files/PDP_LI_DROP-CIRC-BACK-YELLOW25_2-min_1440x.png?v=1746745938'
      ]
    },

    // Paddle Boards
    {
      name: 'Stand Up Paddle Board Yellow White',
      slug: 'stand-up-paddle-board-yellow-white',
      description: '11\'6" inflatable stand up paddle board with yellow and white cabana stripes. Includes pump, paddle, leash and carrying case.',
      price: 449.00,
      comparePrice: 499.00,
      sku: 'FUNBOY-SUP-YW',
      inventory: 40,
      isActive: true,
      isFeatured: true,
      categoryId: categories[4].id, // Paddle Boards
      images: [
        'https://www.funboy.com/cdn/shop/files/Yellow-B-min_1440x.jpg?v=1746845978',
        'https://www.funboy.com/cdn/shop/files/Paddleboard-PDP_PDL-YLLWSTRP_5-min_1440x.png?v=1746845978'
      ]
    },

    // Movie Screen
    {
      name: 'Inflatable Movie Screen 20ft',
      slug: 'inflatable-movie-screen-20ft',
      description: 'Giant 20-foot outdoor inflatable movie screen perfect for backyard movie nights and events.',
      price: 399.00,
      comparePrice: 499.00,
      sku: 'FUNBOY-MOVIE-20',
      inventory: 20,
      isActive: true,
      isFeatured: true,
      categoryId: categories[5].id, // Movie Screen
      images: [
        'https://www.funboy.com/cdn/shop/files/Movie-Screen_3-min_1440x.png?v=1745888980',
        'https://www.funboy.com/cdn/shop/files/Movie-Screen_2-min_1440x.png?v=1745888980'
      ]
    },

    // Tanning Pools
    {
      name: 'Tanning Pool Lounger Yellow Stripe',
      slug: 'tanning-pool-lounger-yellow-stripe',
      description: '72" tanning pool that doubles as a pool float. Perfect for shallow water tanning and lounging.',
      price: 69.00,
      comparePrice: null,
      sku: 'FUNBOY-TPL-YEL',
      inventory: 120,
      isActive: true,
      isFeatured: true,
      categoryId: categories[6].id, // Tanning Pools
      images: [
        'https://www.funboy.com/cdn/shop/files/Tanning-Pool_PDP_SUNTAN-YELLOW-STRIPE_1-min_1440x.png?v=1743637103',
        'https://www.funboy.com/cdn/shop/files/Tanning-Pool_PDP_SUNTAN-YELLOW-STRIPE_3-min_1440x.png?v=1744216397'
      ]
    },
    {
      name: 'Tanning Pool Lounger 2-Pack',
      slug: 'tanning-pool-lounger-2pack',
      description: 'Two yellow stripe tanning pool loungers perfect for couples or friends.',
      price: 129.00,
      comparePrice: 138.00,
      sku: 'FUNBOY-TPL-2PK',
      inventory: 60,
      isActive: true,
      isFeatured: false,
      categoryId: categories[6].id,
      images: [
        'https://www.funboy.com/cdn/shop/files/Yellow-Tanning-Pool-Bundle-min_1440x.jpg?v=1748022719'
      ]
    },

    // Accessories
    {
      name: 'Beach Towel Vintage Cali',
      slug: 'beach-towel-vintage-cali',
      description: '65" luxury beach towel with vintage California palm design in tropical pink.',
      price: 49.00,
      comparePrice: null,
      sku: 'FUNBOY-TWL-CALI',
      inventory: 200,
      isActive: true,
      isFeatured: false,
      categoryId: categories[7].id, // Accessories
      images: [
        'https://www.funboy.com/cdn/shop/files/TWL-CALI_1440x.png?v=1728003393',
        'https://www.funboy.com/cdn/shop/products/Pink-Palm-Tropical-Beach-Towel_1440x.jpg?v=1676494253'
      ]
    },
    {
      name: 'Beach Towel Pink Striped Cabana',
      slug: 'beach-towel-pink-striped-cabana',
      description: '65" luxury beach towel with pink and white cabana stripes.',
      price: 49.00,
      comparePrice: null,
      sku: 'FUNBOY-TWL-PINK',
      inventory: 200,
      isActive: true,
      isFeatured: false,
      categoryId: categories[7].id,
      images: [
        'https://www.funboy.com/cdn/shop/files/TWL-STRIPEcopy_1440x.png?v=1728003634',
        'https://www.funboy.com/cdn/shop/products/Pink-Stripe-Beach-Towel-FUNBOY_1440x.jpg?v=1676494296'
      ]
    },
    {
      name: 'Beach Towel Blue Striped Cabana',
      slug: 'beach-towel-blue-striped-cabana',
      description: '65" luxury beach towel with blue and white cabana stripes.',
      price: 49.00,
      comparePrice: null,
      sku: 'FUNBOY-TWL-BLUE',
      inventory: 200,
      isActive: true,
      isFeatured: false,
      categoryId: categories[7].id,
      images: [
        'https://www.funboy.com/cdn/shop/files/TWL-STRIPE-BLUE_1440x.png?v=1728003707'
      ]
    },
    {
      name: 'Beach Towel Art Deco',
      slug: 'beach-towel-art-deco',
      description: 'Stylish art deco design beach towel with geometric patterns.',
      price: 49.00,
      comparePrice: null,
      sku: 'FUNBOY-TWL-ARTD',
      inventory: 150,
      isActive: true,
      isFeatured: false,
      categoryId: categories[7].id,
      images: [
        'https://www.funboy.com/cdn/shop/files/TWL-ARTD_1440x.png?v=1728003355',
        'https://www.funboy.com/cdn/shop/products/art-deco-towel-3_1440x.jpeg?v=1707192685'
      ]
    },
    {
      name: 'Beach Towel Le FUNBOY',
      slug: 'beach-towel-le-funboy',
      description: 'Premium Le FUNBOY beach towel with signature branding.',
      price: 59.00,
      comparePrice: null,
      sku: 'FUNBOY-TWL-LEFB',
      inventory: 100,
      isActive: true,
      isFeatured: false,
      categoryId: categories[7].id,
      images: [
        'https://www.funboy.com/cdn/shop/files/TWL-LEFUNBOY_1440x.png?v=1728003435',
        'https://www.funboy.com/cdn/shop/products/le-funboy-beach-towel-2_1440x.jpg?v=1707762817'
      ]
    },
    {
      name: 'Beach Towel Disco Shag Lip',
      slug: 'beach-towel-disco-shag-lip',
      description: '72" luxury shag beach towel with iconic lip design.',
      price: 59.00,
      comparePrice: null,
      sku: 'FUNBOY-TWL-LIP',
      inventory: 120,
      isActive: true,
      isFeatured: false,
      categoryId: categories[7].id,
      images: [
        'https://www.funboy.com/cdn/shop/files/TWL-SHAGLIP_1440x.png?v=1728003473',
        'https://www.funboy.com/cdn/shop/products/FUNBOY-Lip-Beach-Towel_1440x.jpg?v=1685194012'
      ]
    },
    {
      name: 'Beach Towel Moroccan Dream',
      slug: 'beach-towel-moroccan-dream',
      description: 'Beautiful green checked beach towel with Moroccan-inspired patterns.',
      price: 49.00,
      comparePrice: null,
      sku: 'FUNBOY-TWL-MRCD',
      inventory: 150,
      isActive: true,
      isFeatured: false,
      categoryId: categories[7].id,
      images: [
        'https://www.funboy.com/cdn/shop/products/Dream-Towel-Resize-min_1440x.jpg?v=1676494765',
        'https://www.funboy.com/cdn/shop/products/Green-Checked-Beach-Towel_1440x.jpg?v=1676494765'
      ]
    },
    {
      name: 'Beach Towel Blue Tie Dye',
      slug: 'beach-towel-blue-tie-dye',
      description: 'Trendy blue tie dye beach towel with premium materials.',
      price: 59.00,
      comparePrice: null,
      sku: 'FUNBOY-TWL-TIEDYE',
      inventory: 100,
      isActive: true,
      isFeatured: false,
      categoryId: categories[7].id,
      images: [
        'https://www.funboy.com/cdn/shop/products/Funboy-Blue-Tie-Dye-Towel-min_1440x.jpg?v=1676494595',
        'https://www.funboy.com/cdn/shop/products/Tie-Dye-Beach-Towel-FUNBOY_1440x.jpg?v=1676494595'
      ]
    },
    {
      name: 'Beach Towel Barbie',
      slug: 'beach-towel-barbie',
      description: 'Official Malibu Barbie beach towel with fringe details.',
      price: 59.00,
      comparePrice: null,
      sku: 'FUNBOY-TWL-BRB',
      inventory: 0, // Sold out
      isActive: true,
      isFeatured: false,
      categoryId: categories[7].id,
      images: [
        'https://www.funboy.com/cdn/shop/files/BRB-TWL-min_1440x.png?v=1727986124',
        'https://www.funboy.com/cdn/shop/files/Barbie-Beach-Towel_160b3d72-2466-4703-9d82-3ee0ad5b66d4_1440x.jpg?v=1691020693'
      ]
    },
    {
      name: 'Float Parade 500 Piece Puzzle',
      slug: 'float-parade-500-piece-puzzle',
      description: 'Beautiful 500-piece puzzle featuring Funboy pool floats in a vibrant parade scene.',
      price: 25.00,
      comparePrice: null,
      sku: 'FUNBOY-PZL-FP500',
      inventory: 100,
      isActive: true,
      isFeatured: false,
      categoryId: categories[7].id,
      images: [
        'https://www.funboy.com/cdn/shop/products/float-parade-500-piece-puzzle-1_1440x.jpeg?v=1648074011',
        'https://www.funboy.com/cdn/shop/products/float-parade-500-piece-puzzle-2_1440x.jpeg?v=1648074011'
      ]
    },
    {
      name: 'Inflatable Air Pump Electric',
      slug: 'inflatable-air-pump-electric',
      description: 'High-powered electric pump to quickly inflate all your pool floats and inflatables.',
      price: 19.00,
      comparePrice: null,
      sku: 'FUNBOY-PUMP-ELEC',
      inventory: 300,
      isActive: true,
      isFeatured: false,
      categoryId: categories[7].id,
      images: [
        'https://cdn.shopify.com/s/files/1/0787/7015/files/ACPMP-min_400x400.png?v=1727986322'
      ]
    }
  ]

  // Create products with images
  for (const productData of products) {
    const { images, ...productInfo } = productData
    
    const product = await prisma.product.create({
      data: productInfo,
    })

    // Create product images
    if (images && images.length > 0) {
      for (let i = 0; i < images.length; i++) {
        await prisma.productImage.create({
          data: {
            productId: product.id,
            url: images[i],
            altText: `${product.name} - Image ${i + 1}`,
            sortOrder: i + 1,
          },
        })
      }
    }

    // Create default product variant
    await prisma.productVariant.create({
      data: {
        productId: product.id,
        name: 'Default',
        price: product.price,
        sku: product.sku,
        inventory: product.inventory,
      },
    })
  }

  // Create admin settings
  await prisma.adminSettings.create({
    data: {
      siteName: 'FunboyKW',
      siteDescription: 'Premium pool floats and inflatables for Middle Eastern customers',
      currency: 'KWD',
      shippingRate: 5.0,
      taxRate: 0.0,
    },
  })

  console.log('Database seeded successfully with comprehensive Funboy product catalog!')
  console.log(`Created ${products.length} products across ${categories.length} categories`)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  }) 