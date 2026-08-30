import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  const company = await prisma.company.create({
    data: {
      name: 'Empresa Teste LTDA',
      document: '00.000.000/0001-00',
    },
  })

  const passwordHash = await bcrypt.hash('admin123', 10)

  const admin = await prisma.user.create({
    data: {
      name: 'Administrador',
      email: 'admin@empresa.com',
      passwordHash,
      role: 'ADMIN',
      companyId: company.id,
    },
  })

  console.log('Seed executado com sucesso!')
  console.log('User:', admin.email)
  console.log('Password: admin123')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
