import { GetServerSideProps, GetServerSidePropsContext } from 'next';

import CardsList, { CardsListProps } from 'components/CardsList';
import protectedRoutes from 'utils/protected-routes';
import Profile from '../../templates/Profile';

import cardsMock from '../../components/PaymentOptions/mock';

export default function Cards({ cards }: CardsListProps) {
  return (
    <Profile>
      <CardsList cards={cards} />
    </Profile>
  );
}

export const getServerSideProps: GetServerSideProps<CardsListProps> = async (
  context: GetServerSidePropsContext,
) => {
  const session = await protectedRoutes(context);

  return {
    props: {
      cards: cardsMock,
      session,
    },
  };
};
