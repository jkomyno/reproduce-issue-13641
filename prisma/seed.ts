import { info, lo, lu } from './staticTables';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient;

async function main() {
    for (let r of info) {
        await prisma.test1.create({
            data: r
        })
    }
    for (let l of lo) {
        await prisma.test2.create({
            data: l
        })
    }
    for (let m of lu) {
        await prisma.test3.create({
            data: m
        })
    }
}

main()
    .then(() => {
        console.log('TUTTO OK')
    })
    .catch(e => {
        console.log('ERRORE', e)
        process.exit(10)
    }).finally(() => {
        prisma.$disconnect()
    })

