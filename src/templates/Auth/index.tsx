import Heading from 'components/Heading';
import Logo from 'components/Logo';
import { Container, BannerBlock, Subtitle, Footer, Content } from './styles';

interface AuthProps {
  title: string;
  children: React.ReactNode;
}

const Auth = ({ title, children }: AuthProps) => {
  return (
    <Container>
      <BannerBlock>
        <Logo />
        <Heading>All your favorite games in one place</Heading>
        <Subtitle>
          <strong>WON</strong> is the best and most complete gaming platform.
        </Subtitle>
        <Footer>Won Games 2020 Todos os Direitos Reservados</Footer>
      </BannerBlock>

      <Content>
        <Logo color="black" size="large" />
        <Heading color="black" lineColor="secondary" lineLeft>
          {title}
        </Heading>
        {children}
      </Content>
    </Container>
  );
};

export default Auth;
