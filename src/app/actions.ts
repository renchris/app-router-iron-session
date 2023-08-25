'use server' //remove and set serverActions to false in next.config.js to  disable server actions

import { cookies } from "next/headers"

import { getServerActionSession } from '../../lib/session'

export const submitCookieToStorageServerActionIronSession = async (cookie: string) => {
  const session = await getServerActionSession()
  session.cookieName = cookie
  await session.save()
}

export const readCookieFromStorageServerActionIronSession = async (): Promise<string> => {
  const session = await getServerActionSession()
  return session.cookieName || 'Cookie Not Found!'
}

export const submitCookieToStorageServerAction = async (cookie: string) => {
  cookies().set('cookieName', cookie)
}
