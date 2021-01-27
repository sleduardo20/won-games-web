import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import items from './mock';

import ExploreSideBar from '.';

describe('<ExploreSideBar/>', () => {
  it('should be able render headings', () => {
    renderWithTheme(<ExploreSideBar items={items} />);

    expect(screen.getByRole('heading', { name: /price/i })).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /sort by/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /system/i }),
    ).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /genre/i })).toBeInTheDocument();
  });

  it('should be able render inputs', () => {
    renderWithTheme(<ExploreSideBar items={items} />);

    expect(
      screen.getByRole('checkbox', { name: /under \$50/i }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('radio', { name: /low to high/i }),
    ).toBeInTheDocument();
  });

  it('should be able render filter button', () => {
    renderWithTheme(<ExploreSideBar items={items} />);

    expect(screen.getByRole('button', { name: /filter/i })).toBeInTheDocument();
  });

  it('should be able check initial values that are passed in', () => {
    renderWithTheme(
      <ExploreSideBar items={items} initialValues={{ windows: true }} />,
    );

    expect(screen.getByRole('checkbox', { name: /windows/i })).toBeChecked();
  });
});
