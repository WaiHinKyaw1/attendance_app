import { NextRequest, NextResponse } from 'next/server'
import jwt from 'jsonwebtoken'

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value
  const protectedPaths = ['/dashboard']

  if (protectedPaths.some(p => request.nextUrl.pathname.startsWith(p))) {
    if (!token) return NextResponse.redirect(new URL('/login', request.url))

    try {
      jwt.verify(token, process.env.JWT_SECRET!)
    } catch {
      return NextResponse.redirect(new URL('/login', request.url))
    }
  }

  return NextResponse.next()
}
