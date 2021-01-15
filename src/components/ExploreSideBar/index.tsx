import Button from '../Button';
import Heading from '../Heading';
import Checkbox from '../CheckBox';
import Radio from '../Radio';

import { Container } from './styles';

type Field = {
  label: string;
  name: string;
};

export type ItemProps = {
  title: string;
  name: string;
  type: string;
  fields: Field[];
};

export interface ExplorerSideBarProps {
  items: ItemProps[];
}

const ExploreSideBar = ({ items }: ExplorerSideBarProps) => {
  return (
    <Container>
      {items.map(item => (
        <div key={item.title}>
          <Heading lineBottom size="small" lineColor="secondary">
            {item.title}
          </Heading>

          {item.type === 'checkbox' &&
            item.fields.map(field => (
              <Checkbox
                key={field.name}
                label={field.label}
                labelfor={field.name}
                name={field.name}
              />
            ))}

          {item.type === 'radio' &&
            item.fields.map(field => (
              <Radio
                name={item.name}
                id={field.name}
                key={field.name}
                label={field.label}
                labelFor={field.name}
                value={field.name}
              />
            ))}
        </div>
      ))}

      <Button fullWidth size="medium">
        Filter
      </Button>
    </Container>
  );
};

export default ExploreSideBar;