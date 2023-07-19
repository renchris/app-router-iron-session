//'use server' //remove and set serverActions to false in next.config.js to  disable server actions

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

export const submitIronSessionCookieToStorage = async (cookie: string) => {
    await fetch('http://localhost:3000/api/submitIronSessionCookie', {
    method: 'POST',
    body: JSON.stringify({
      cookie,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  })
}

export const readIronSessionCookieStorage = async (): Promise<string> => {
    const responseWithCookieFromStorage = await fetch('http://localhost:3000/api/readIronSessionCookieStorage', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  const data = await responseWithCookieFromStorage.json();
  const cookieValue = data?.cookieInStorage || 'No Cookie In Storage'
  return cookieValue
}