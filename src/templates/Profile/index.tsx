import { useRouter } from 'next/router';

import { Container } from 'components/Container';
import Heading from 'components/Heading';
import ProfileMenu from 'components/ProfileMenu';

import Base from 'templates/Base';

import { Main, Content } from './styles';

export interface ProfileTemplateProps {
  children: React.ReactNode;
}

const Profile = ({ children }: ProfileTemplateProps) => {
  const { asPath } = useRouter();

  return (
    <Base>
      <Container>
        <Heading lineLeft lineColor="secondary">
          My Profile
        </Heading>
        <Main>
          <ProfileMenu activeLink={asPath} />
          <Content>{children}</Content>
        </Main>
      </Container>
    </Base>
  );
};

export default Profile;
