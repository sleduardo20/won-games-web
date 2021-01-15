import Button from '../Button';
import Heading from '../Heading';
import Checkbox from '../CheckBox';
import Radio from '../Radio';

import { Container } from './styles';

const ExploreSideBar = () => {
  return (
    <Container>
      <Heading lineBottom size="small" lineColor="secondary">
        Price
      </Heading>

      <Checkbox label="Under $50" labelfor="under-50" name="under-50" />
      <Checkbox label="Under $100" labelfor="under-100" name="under-100" />
      <Checkbox label="Under $150" labelfor="under-150" name="under-150" />
      <Checkbox label="Under $200" labelfor="under-200" name="under-200" />
      <Checkbox label="Free" labelfor="free" name="free" />

      <Heading lineBottom size="small" lineColor="secondary">
        Sort By
      </Heading>
      <Radio
        id="high-to-low"
        name="sort-by"
        label="High to low"
        labelFor="high-to-low"
        value="high-to-low"
      />

      <Radio
        id="low-to-high"
        name="sort-by"
        label="Low to high"
        labelFor="low-to-high"
        value="low-to-high"
      />

      <Heading lineBottom size="small" lineColor="secondary">
        System
      </Heading>

      <Checkbox label="Windows" labelfor="windows" name="windows" />
      <Checkbox label="Linux" labelfor="linux" name="linux" />
      <Checkbox label="Mac" labelfor="mac" name="mac" />

      <Heading lineBottom size="small" lineColor="secondary">
        Genre
      </Heading>

      <Checkbox label="Action" labelfor="action" name="action" />
      <Checkbox label="Adventure" labelfor="adventure" name="adventure" />
      <Checkbox label="FPS" labelfor="fps" name="fps" />
      <Checkbox label="MMORPG" labelfor="mmorrpg" name="mmorrpg" />

      <Button fullWidth size="medium">
        Filter
      </Button>
    </Container>
  );
};

export default ExploreSideBar;
