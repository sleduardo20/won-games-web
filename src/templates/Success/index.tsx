import { Done } from '@styled-icons/material-outlined';
import { GameCardProps } from 'components/GameCard';
import { HighLightProps } from 'components/HighLight';
import ShowCase from 'components/ShowCase';
import { useCart } from 'hooks/useCart';
import Link from 'next/link';
import { useEffect } from 'react';

import Base from 'templates/Base';
import { Container } from '../../components/Container';

import { Wrapper, CheckMark, Heading, Text } from './styles';

export interface SuccessTemplateProps {
  recommendedTitle: string;
  recommendedGames: GameCardProps[];
  recommendedHighLight: HighLightProps;
}

export const Success = ({
  recommendedTitle,
  recommendedGames,
  recommendedHighLight,
}: SuccessTemplateProps) => {
  const { clearCart } = useCart();

  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return (
    <Base>
      <Container>
        <Wrapper>
          <Heading>Your purchase was successful!</Heading>
          <CheckMark>
            <Done />
          </CheckMark>
          <Text>
            Wait for you payment details by email. Your game is now available
            for download inside your.
            <Link href="/profile/orders">
              <a>Orders List</a>
            </Link>
          </Text>
        </Wrapper>
      </Container>
      <ShowCase
        games={recommendedGames}
        title={recommendedTitle}
        highlight={recommendedHighLight}
      />
    </Base>
  );
};
