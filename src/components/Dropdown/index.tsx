import { Container, Title, Content } from './styles';

export interface DropdownProps {
  title: React.ReactNode;
  children: React.ReactNode;
}

const Dropdown = ({ title, children }: DropdownProps) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Content>{children}</Content>
    </Container>
  );
};

export default Dropdown;
