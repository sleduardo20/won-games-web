import { GetServerSideProps, GetServerSidePropsContext } from 'next';

import {
  QueryProfileMe,
  QueryProfileMeVariables,
} from 'graphql/generated/QueryProfileMe';
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

  if (!session) {
    return { props: {} };
  }

  const { data } = await apolloClient.query<
    QueryProfileMe,
    QueryProfileMeVariables
  >({
    query: QUERY_PROFILE_ME,
    variables: {
      identifier: session?.id as string,
    },
  });

  return {
    props: {
      username: data.user?.username,
      email: data.user?.email,
      session,
    },
  };
};
