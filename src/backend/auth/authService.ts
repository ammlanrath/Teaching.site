import { prisma } from '@/lib/prisma'

export async function loginUser(email: string, passwordHash: string) {
  // Mock logic for auth
  const user = await prisma.user.findUnique({
    where: { email }
  })
  if (!user || user.passwordHash !== passwordHash) {
    throw new Error("Invalid credentials")
  }
  return user
}
