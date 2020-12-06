import Link from 'next/link';
import Button from '../Button';
import { Container, Image, Title, Description } from './styles';

export interface EmptyProps {
  title: string;
  description: string;
  hasLink?: boolean;
}

const Empty = ({ title, description, hasLink }: EmptyProps) => {
  return (
    <Container>
      <Image
        src="/img/empty.svg"
        alt="A gamer in a couch playing videogame"
        role="image"
      />

      <Title>{title}</Title>
      <Description>{description}</Description>

      {hasLink && (
        <Link href="/" passHref>
          <Button as="a">Go back to store</Button>
        </Link>
      )}
    </Container>
  );
};

export default Empty;
