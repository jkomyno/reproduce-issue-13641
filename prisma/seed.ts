import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  await prisma.test1.create({
    data: {
      Type: 'type-1',
      Price: 1,
    }
  })
}

main()
  .catch(e => {
    console.log('received error', e)
    process.exit(1)
  }).finally(async () => {
    await prisma.$disconnect()
  })
