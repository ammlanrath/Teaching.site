import { NextResponse } from 'next/server'
import { loginUser } from '@/backend/auth/authService'

export async function POST(request: Request) {
  try {
    const { email, passwordHash } = await request.json()
    const user = await loginUser(email, passwordHash)
    return NextResponse.json({ success: true, user })
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 401 })
  }
}
