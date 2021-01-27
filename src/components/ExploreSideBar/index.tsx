import { useState } from 'react';
import Button from '../Button';
import Heading from '../Heading';
import Checkbox from '../CheckBox';
import Radio from '../Radio';

import { Container } from './styles';

type Field = {
  label: string;
  name: string;
};

type Values = {
  [field: string]: boolean | string;
};

export type ItemProps = {
  title: string;
  name: string;
  type: string;
  fields: Field[];
};

export interface ExplorerSideBarProps {
  items: ItemProps[];
  initialValues?: Values;
}

const ExploreSideBar = ({
  items,
  initialValues = {},
}: ExplorerSideBarProps) => {
  const [values, setValues] = useState(initialValues);

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
                isChecked={!!values[field.name]}
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
                defaultChecked={field.name === values[item.name]}
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
