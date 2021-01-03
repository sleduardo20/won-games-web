import { GetServerSideProps } from 'next';

import CardsList, { CardsListProps } from 'components/CardsList';
import Profile from '../../templates/Profile';

import cardsMock from '../../components/PaymentOptions/mock';

export default function Cards({ cards }: CardsListProps) {
  return (
    <Profile>
      <CardsList cards={cards} />
    </Profile>
  );
}

export const getServerSideProps: GetServerSideProps<CardsListProps> = async () => {
  return {
    props: {
      cards: cardsMock,
    },
  };
};
