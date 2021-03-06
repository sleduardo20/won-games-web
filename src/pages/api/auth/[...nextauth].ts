import { NextApiRequest, NextApiResponse } from 'next-auth/internals/utils';
import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import { api } from 'services/api';

type Session = {
  jwt: string | null;
  id: string | null;
};
type User = {
  id: string | null;
  username: string | null;
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
        const { data } = await api.post('auth/local', {
          identifier: email,
          password,
        });

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
        token.name = user.username;
        token.jwt = user.jwt;
      }

      return Promise.resolve(token);
    },
  },
};

const Auth = (req: NextApiRequest, res: NextApiResponse) =>
  NextAuth(req, res, options);

export default Auth;
