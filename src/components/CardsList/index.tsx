import Heading from '../Heading';
import { PaymentCard } from '../PaymentOptions';

import { Card } from './styles';

export interface CardsListProps {
  cards?: PaymentCard[];
}

const CardsList = ({ cards }: CardsListProps) => {
  return (
    <>
      <Heading color="black" lineBottom size="small">
        My Cards
      </Heading>
      {cards?.map(card => (
        <Card key={card.number}>
          <img src={card.img} alt={card.flag} />
          <span>{card.number}</span>
        </Card>
      ))}
    </>
  );
};

export default CardsList;
