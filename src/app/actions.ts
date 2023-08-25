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

export const readCookieToStorageServerAction = async (): Promise<string> => {
  const cookieStore = cookies()
  const currentCookie = cookieStore.get('cookieName')
  return currentCookie ? currentCookie.value : 'Cookie Not Found!'
}

export const submitCookieToStorage = async (cookie: string) => {
  await fetch('http://localhost:3000/api/submitCookie', {
    method: 'POST',
    body: JSON.stringify({
      cookie,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  })
}

export const readCookieStorage = async (): Promise<string> => {
  const responseWithCookieFromStorage = await fetch('http://localhost:3000/api/readCookieStorage', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  const data = await responseWithCookieFromStorage.json();
  const cookieValue = data?.cookieInStorage?.value || 'No Cookie In Storage'
  return cookieValue
}