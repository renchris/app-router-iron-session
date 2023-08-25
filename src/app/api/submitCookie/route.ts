import { NextResponse } from 'next/server'

import { cookies } from 'next/headers'

export async function POST(request: Request) {
  try {
    const requestBody = await request.json()
    const { cookie } : { cookie: string } = requestBody
    const response = NextResponse.json({ message: 'ok' })
    cookies().set('cookieName', cookie)
    return response
  } catch (error: unknown) {
    console.error((error as Error).message)
    return new Response(JSON.stringify({ message: (error as Error).message }), { status: 500 })
  }
}
