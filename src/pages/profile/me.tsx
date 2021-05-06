import FormProfile from 'components/FormProfile';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import protectedRoutes from 'utils/protected-routes';
import Profile from '../../templates/Profile';

export default function Me() {
  return (
    <Profile>
      <FormProfile />
    </Profile>
  );
}

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext,
) => {
  const session = await protectedRoutes(context);

  return {
    props: { session },
    session,
  };
};
