import Link from 'next/link';

import Heading from '../Heading';
import Logo from '../Logo';
import { Container, Content, Column, Copyright } from './styles';

const Footer = () => {
  return (
    <Container>
      <Logo color="black" />
      <Content>
        <Column aria-label="contact">
          <Heading color="black" size="small" lineBottom lineColor="secondary">
            Contact
          </Heading>
          <a href="mailto:sld@wongames.com">sac@wongames.com</a>
        </Column>
        <Column aria-labelledby="social media">
          <Heading color="black" size="small" lineBottom lineColor="secondary">
            Follow Us
          </Heading>
          <nav id="social media">
            <a href="#" target="_blank" rel="noopenner, noreferrer">
              Intagram
            </a>
            <a href="#" target="_blank" rel="noopenner, noreferrer">
              Twetter
            </a>
            <a href="#" target="_blank" rel="noopenner, noreferrer">
              Youtube
            </a>
            <a href="#" target="_blank" rel="noopenner, noreferrer">
              Facebook
            </a>
          </nav>
        </Column>
        <Column aria-labelledby="resources">
          <Heading color="black" size="small" lineBottom lineColor="secondary">
            Links
          </Heading>
          <nav id="resources">
            <Link href="/">
              <a>Home</a>
            </Link>
            <Link href="/games">
              <a>Games</a>
            </Link>
            <Link href="/search">
              <a>Buscar</a>
            </Link>
          </nav>
        </Column>
        <Column aria-label="footer-location">
          <Heading color="black" size="small" lineBottom lineColor="secondary">
            Location
          </Heading>
          <span>Loren dolor ipsum</span>
          <span>Loren dolor ipsum</span>
          <span>Loren dolor ipsum</span>
        </Column>
      </Content>
      <Copyright>Won Games 2020 All rigths reserded.</Copyright>
    </Container>
  );
};

export default Footer;
