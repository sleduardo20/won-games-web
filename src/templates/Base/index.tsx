import { Container } from 'components/Container';
import Footer from 'components/Footer';
import Menu from 'components/Menu';

import { Wrapper, Content, SectionFooter } from './styles';

export interface BaseTemplateProps {
  children: React.ReactNode;
}

const Base = ({ children }: BaseTemplateProps) => {
  return (
    <Wrapper>
      <Container>
        <Menu />
      </Container>
      <Content>{children}</Content>

      <SectionFooter>
        <Container>
          <Footer />
        </Container>
      </SectionFooter>
    </Wrapper>
  );
};

export default Base;
