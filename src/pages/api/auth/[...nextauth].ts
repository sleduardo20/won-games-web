import { NextApiRequest, NextApiResponse } from 'next';
import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

type Session = {
  jwt: string | null;
  id: string | null;
};
type User = {
  id: string | null;
  name: string | null;
  email: string | null;
  jwt: string | null;
};
type Token = {
  id: string | null;
  email: string | null;
  name: string | null;
  jwt: string | null;
};
type Authorize = {
  email: string;
  password: string;
};

const options = {
  pages: {
    signIn: '/sing-in',
  },
  providers: [
    Providers.Credentials({
      name: 'Sing-In',
      credentials: {},
      async authorize({ email, password }: Authorize) {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/auth/local`,
          {
            method: 'POST',
            body: new URLSearchParams({ identifier: email, password }),
          },
        );

        const data = await response.json();

        if (data.user) {
          return { ...data.user, jwt: data.jwt };
        }
        return null;
      },
    }),
  ],
  callbacks: {
    session: async (session: Session, user: User) => {
      session.jwt = user.jwt;
      session.id = user.id;

      return Promise.resolve(session);
    },
    jwt: async (token: Token, user: User) => {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.name = user.name;
        token.jwt = user.jwt;
      }

      return Promise.resolve(token);
    },
  },
};

const Auth = (req: NextApiRequest, res: NextApiResponse) =>
  NextAuth(req, res, options);

export default Auth;
