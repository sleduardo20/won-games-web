import Heading from '../Heading';
import { Container } from './styles';

const ExploreSideBar = () => {
  return (
    <Container>
      <Heading lineBottom size="small" lineColor="secondary">
        Price
      </Heading>
      <Heading lineBottom size="small" lineColor="secondary">
        Sort By
      </Heading>
      <Heading lineBottom size="small" lineColor="secondary">
        System
      </Heading>
      <Heading lineBottom size="small" lineColor="secondary">
        Genre
      </Heading>
    </Container>
  );
};

export default ExploreSideBar;
