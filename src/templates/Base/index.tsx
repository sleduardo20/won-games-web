import { Container } from 'components/Container';
import Footer from 'components/Footer';
import Menu from 'components/Menu';
import { useSession } from 'next-auth/client';

import { Wrapper, Content, SectionFooter } from './styles';

export interface BaseTemplateProps {
  children: React.ReactNode;
}

const Base = ({ children }: BaseTemplateProps) => {
  const [session, loading] = useSession();

  return (
    <Wrapper>
      <Container>
        <Menu username={session?.user?.name} loading={loading} />
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
