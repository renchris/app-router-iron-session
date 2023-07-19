import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { IronSessionData, unsealData } from 'iron-session'
import { sessionOptions } from '../../../../lib/session'

export async function GET() {
  try {
    const cookieStore = cookies()
    const currentCookieValue = cookieStore.get('cookieName')?.value || ''
    const decryptedCookie: IronSessionData = currentCookieValue ? await unsealData(currentCookieValue, {
        password: sessionOptions.password
    }) : { cookieName: 'No Cookie Stored'}
    return NextResponse.json({ cookieInStorage: decryptedCookie.cookieName })
  } catch (error: unknown) {
    console.error((error as Error).message)
    return new Response(JSON.stringify({ message: (error as Error).message }), { status: 500 })
  }
}
