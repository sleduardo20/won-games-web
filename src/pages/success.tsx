import { QueryRecommended } from 'graphql/generated/QueryRecommended';
import { QUERY_RECOMMENDED } from 'graphql/queries/recommended';
import { GetStaticProps } from 'next';
import { Success, SuccessTemplateProps } from 'templates/Success';
import { initializeApollo } from 'utils/apollo';
import { gamesMapper, highLightMapper } from 'utils/mappers';

export default function SuccessPage(props: SuccessTemplateProps) {
  return <Success {...props} />;
}

export const getStaticProps: GetStaticProps = async () => {
  const apollo = initializeApollo();

  const { data } = await apollo.query<QueryRecommended>({
    query: QUERY_RECOMMENDED,
  });

  return {
    revalidate: 60 * 60, // 1 hour
    props: {
      recommendedTitle: data.recommended?.section?.title,
      recommendedGames: gamesMapper(data.recommended?.section?.games),
      recommendedHighLight: highLightMapper(
        data.recommended?.section?.highlight,
      ),
    },
  };
};
