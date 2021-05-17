export const useSession = jest.spyOn(require('next-auth/client'), 'useSession');
const session = { jwt: '123', user: { email: 'lorem@ipsum.com' } };
useSession.mockImplementation(() => [session]);