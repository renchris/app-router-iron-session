import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { getSession } from '../../../../lib/session'

export async function GET(request: Request, response: Response) {
  try {
    const cookieStore = cookies()
    const session = await getSession(request, response)
    const cookeValue = session.cookieName || 'No Cookie Stored!'
    return NextResponse.json({ cookieInStorage: cookeValue })
  } catch (error: unknown) {
    console.error((error as Error).message)
    return new Response(JSON.stringify({ message: (error as Error).message }), { status: 500 })
  }
}
