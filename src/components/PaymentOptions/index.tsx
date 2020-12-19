import Heading from '../Heading';
import Radio from '../Radio';
import {
  Container,
  Body,
  Footer,
  CardsList,
  CardItem,
  CardInfo,
} from './styles';

export type PaymentCard = {
  number: string;
  flag: string;
  img: string;
};

export interface PaymentOptionsProps {
  cards?: PaymentCard[];
  handlePayment: () => void;
}

const PaymentOptions = ({ cards, handlePayment }: PaymentOptionsProps) => {
  return (
    <Container>
      <Body>
        <Heading color="black" size="small" lineBottom>
          Payment
        </Heading>
        <CardsList>
          {cards?.map(card => (
            <CardItem key={card.number}>
              <CardInfo>
                <img src={card.img} alt={card.flag} />
                {card.number}
              </CardInfo>
              <Radio id={card.number} name="credit-card" value={card.number} />
            </CardItem>
          ))}
        </CardsList>
      </Body>
      <Footer />
    </Container>
  );
};

export default PaymentOptions;
