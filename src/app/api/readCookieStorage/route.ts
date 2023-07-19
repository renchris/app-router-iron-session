import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'

export async function GET(request: Request) {
  try {
    const cookieStore = cookies()
    const currentCookie = cookieStore.get('cookieName')
    return NextResponse.json({ cookieInStorage: currentCookie })
  } catch (error: unknown) {
    console.error((error as Error).message)
    return new Response(JSON.stringify({ message: (error as Error).message }), { status: 500 })
  }
}
