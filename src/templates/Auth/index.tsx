import Heading from 'components/Heading';
import Logo from 'components/Logo';
import {
  Container,
  BannerBlock,
  BannerContent,
  Subtitle,
  Footer,
  Content,
  ContentWrapper,
} from './styles';

interface AuthProps {
  title: string;
  children: React.ReactNode;
}

const Auth = ({ title, children }: AuthProps) => {
  return (
    <Container>
      <BannerBlock>
        <BannerContent>
          <Logo />
          <div>
            <Heading size="huge">All your favorite games in one place</Heading>
            <Subtitle>
              <strong>WON</strong> is the best and most complete gaming
              platform.
            </Subtitle>
          </div>
          <Footer>Won Games 2020 Todos os Direitos Reservados</Footer>
        </BannerContent>
      </BannerBlock>

      <Content>
        <ContentWrapper>
          <Logo id="content" color="black" size="large" />
          <Heading color="black" lineColor="secondary" lineLeft>
            {title}
          </Heading>
          {children}
        </ContentWrapper>
      </Content>
    </Container>
  );
};

export default Auth;
