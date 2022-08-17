import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  await prisma.test1.create({
    data: {
      Type: 'type-1',
      Price: 1,
    }
  })

  await prisma.test2.create({
    data: {
      Type: 'type-2',
      Price: 2,
    }
  })

  await prisma.test3.create({
    data: {
      Type: 'type-3',
      Price: 3,
    }
  })
}

main()
  .catch(e => {
    console.log('received error', e)
    process.exit(10)
  }).finally(async () => {
    await prisma.$disconnect()
  })
