import { PrismaClient } from '@prisma/client';
import { randomUUID } from 'crypto';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  const email = 'marcio-reino@hotmail.com';
  const existing = await prisma.user.findUnique({ where: { email } });
  if (!existing) {
    const hashed = await bcrypt.hash('password123', 10);
    await prisma.user.create({
      data: {
        uuid: randomUUID(),
        name: 'marcio',
        cellphone: '22998524209',
        email,
        password: hashed,
      },
    });
    console.log('Default user created');
  } else {
    console.log('Default user already exists');
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
