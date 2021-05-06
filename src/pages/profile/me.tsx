import { GetServerSideProps, GetServerSidePropsContext } from 'next';

import { QueryProfileMe } from 'graphql/generated/QueryProfileMe';
import { QUERY_PROFILE_ME } from 'graphql/queries/profile';
import { initializeApollo } from 'utils/apollo';

import protectedRoutes from 'utils/protected-routes';

import FormProfile, { FormProfileProps } from '../../components/FormProfile';
import Profile from '../../templates/Profile';

export default function Me(props: FormProfileProps) {
  return (
    <Profile>
      <FormProfile {...props} />
    </Profile>
  );
}

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext,
) => {
  const session = await protectedRoutes(context);
  const apolloClient = initializeApollo(null, session);

  const { data } = await apolloClient.query<QueryProfileMe>({
    query: QUERY_PROFILE_ME,
  });

  return {
    props: {
      username: data.me?.username,
      email: data.me?.email,
      session,
    },
  };
};
