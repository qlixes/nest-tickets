import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const developer = await prisma.role.create({
    data: {
      name: 'developer',
    },
  });

  const admin = await prisma.role.create({
    data: {
      name: 'admin',
    },
  });

  const merchant = await prisma.role.create({
    data: {
      name: 'merchant',
    },
  });

  console.log({ developer, admin, merchant });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
