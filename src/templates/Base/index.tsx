import { Container } from 'components/Container';
import Footer from 'components/Footer';
import Menu from 'components/Menu';

import { SectionFooter } from './styles';

export interface BaseTemplateProps {
  children: React.ReactNode;
}

const Base = ({ children }: BaseTemplateProps) => {
  return (
    <section>
      <Container>
        <Menu />
      </Container>
      {children}
      <SectionFooter>
        <Container>
          <Footer />
        </Container>
      </SectionFooter>
    </section>
  );
};

export default Base;
