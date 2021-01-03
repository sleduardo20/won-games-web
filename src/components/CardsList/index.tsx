import Heading from 'components/Heading';
import { PaymentCard } from 'components/PaymentOptions';

import { Container, Card } from './styles';

export interface CardsListProps {
  cards?: PaymentCard[];
}

const CardsList = ({ cards }: CardsListProps) => {
  return (
    <Container>
      <Heading color="black" lineBottom size="small">
        My Cards
      </Heading>
      {cards?.map(card => (
        <Card key={card.number}>
          <img src={card.img} alt={card.flag} />
          <span>{card.number}</span>
        </Card>
      ))}
    </Container>
  );
};

export default CardsList;
