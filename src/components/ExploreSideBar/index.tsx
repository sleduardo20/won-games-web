import { useCallback, useState } from 'react';
import { FilterList, Close } from 'styled-icons/material-outlined';

import Button from '../Button';
import Heading from '../Heading';
import Checkbox from '../CheckBox';
import Radio from '../Radio';

import {
  Container,
  Overlay,
  IconWrapper,
  Content,
  Items,
  Footer,
} from './styles';

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
  onFilter: (values: Values) => void;
}

const ExploreSideBar = ({
  items,
  initialValues = {},
  onFilter,
}: ExplorerSideBarProps) => {
  const [values, setValues] = useState(initialValues);
  const [isOpen, setIsOpen] = useState(false);

  const handleFilter = useCallback(() => {
    onFilter(values);
    setIsOpen(false);
  }, [values, onFilter]);

  const handleChange = useCallback((name: string, value: string | boolean) => {
    setValues(s => ({ ...s, [name]: value }));
  }, []);

  return (
    <Container isOpen={isOpen}>
      <Overlay aria-hidden={isOpen} />
      <IconWrapper>
        <FilterList aria-label="open filters" onClick={() => setIsOpen(true)} />
        <Close aria-label="open filters" onClick={() => setIsOpen(false)} />
      </IconWrapper>

      <Content>
        {items.map(item => (
          <Items key={item.title}>
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
                  onCheck={v => handleChange(field.name, v)}
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
                  onChange={() => handleChange(item.name, field.name)}
                />
              ))}
          </Items>
        ))}
      </Content>

      <Footer>
        <Button fullWidth size="medium" onClick={handleFilter}>
          Filter
        </Button>
      </Footer>
    </Container>
  );
};

export default ExploreSideBar;
