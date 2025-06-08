
import { getUserFromRequest } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const user = await getUserFromRequest(req)
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const today = new Date()
  const attendance = await prisma.attendance.findFirst({
    where: { userId: user.userId, date: { gte: new Date(today.toDateString()) } }
  })

  if (!attendance) return NextResponse.json({ error: 'No check-in record' }, { status: 404 })

  const updated = await prisma.attendance.update({
    where: { id: attendance.id },
    data: { checkOut: today }
  })

  return NextResponse.json(updated)
}
