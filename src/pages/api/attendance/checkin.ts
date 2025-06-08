
import { getUserFromRequest } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const user = await getUserFromRequest(req)
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const today = new Date()
  const attendance = await prisma.attendance.create({
    data: {
      userId: user.userId,
      date: today,
      checkIn: today
    }
  })

  return NextResponse.json(attendance)
}
