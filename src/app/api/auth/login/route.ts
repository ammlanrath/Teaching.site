import { NextResponse } from 'next/server'

// TEMPORARY DEPLOYMENT MODE:
// Database integration is disabled until the production MySQL database is connected.
// Restore the original database implementation when DATABASE_URL is configured.
export async function POST() {
  return NextResponse.json(
    {
      success: false,
      message: 'Authentication is temporarily disabled while the production database is being configured.'
    },
    { status: 503 }
  )
}
