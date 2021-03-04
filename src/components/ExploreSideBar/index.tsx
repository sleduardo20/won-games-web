import { useCallback, useState } from 'react';
import { FilterList, Close } from 'styled-icons/material-outlined';
import xor from 'lodash.xor';

import { ParsedUrlQueryInput } from 'querystring';

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

type Values = ParsedUrlQueryInput;

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

  const handleRadio = useCallback((name: string, value: string | boolean) => {
    setValues(s => ({ ...s, [name]: value }));
  }, []);

  const handleCheckbox = useCallback(
    (name: string, value: string) => {
      const currentList = (values[name] as []) || [];
      setValues(state => ({ ...state, [name]: xor(currentList, [value]) }));
    },
    [values],
  );

  return (
    <Container isOpen={isOpen}>
      <Overlay aria-hidden={isOpen} />
      <IconWrapper>
        <FilterList aria-label="open filters" onClick={() => setIsOpen(true)} />
        <Close aria-label="close filters" onClick={() => setIsOpen(false)} />
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
                  isChecked={(values[item.name] as string[])?.includes(
                    field.name,
                  )}
                  onCheck={() => handleCheckbox(item.name, field.name)}
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
                  defaultChecked={
                    String(field.name) === String(values[item.name])
                  }
                  onChange={() => handleRadio(item.name, field.name)}
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
