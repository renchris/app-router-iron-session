import {
  IronSessionOptions, getIronSession, IronSessionData,
} from 'iron-session'

export const sessionOptions: IronSessionOptions = {
  password: 'change-this-this-is-not-a-secure-password',
  cookieName: 'cookieName',
  cookieOptions: {
    secure: process.env.NODE_ENV === 'production',
  },
}

declare module 'iron-session' {
  interface IronSessionData {
    cookieName?: string;
  }
}

const getSession = async (req: Request, res: Response) => {
  const session = getIronSession<IronSessionData>(req, res, sessionOptions)
  return session
}

export {
    getSession,
  }
  