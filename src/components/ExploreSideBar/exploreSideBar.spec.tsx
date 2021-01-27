import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import userEvent from '@testing-library/user-event';
import items from './mock';

import ExploreSideBar from '.';

describe('<ExploreSideBar/>', () => {
  it('should be able render headings', () => {
    renderWithTheme(<ExploreSideBar onFilter={jest.fn} items={items} />);

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
    renderWithTheme(<ExploreSideBar onFilter={jest.fn} items={items} />);

    expect(
      screen.getByRole('checkbox', { name: /under \$50/i }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('radio', { name: /low to high/i }),
    ).toBeInTheDocument();
  });

  it('should be able render filter button', () => {
    renderWithTheme(<ExploreSideBar onFilter={jest.fn} items={items} />);

    expect(screen.getByRole('button', { name: /filter/i })).toBeInTheDocument();
  });

  it('should be able check initial values that are passed in', () => {
    renderWithTheme(
      <ExploreSideBar
        onFilter={jest.fn}
        items={items}
        initialValues={{ windows: true, sort_by: 'low-to-high' }}
      />,
    );

    expect(screen.getByRole('checkbox', { name: /windows/i })).toBeChecked();

    expect(screen.getByRole('radio', { name: /low to high/i })).toBeChecked();
  });

  it('should be able filter with initial values', () => {
    const onFilter = jest.fn();

    renderWithTheme(
      <ExploreSideBar
        items={items}
        initialValues={{ windows: true, sort_by: 'low-to-high' }}
        onFilter={onFilter}
      />,
    );

    userEvent.click(screen.getByRole('button', { name: /filter/i }));

    expect(onFilter).toBeCalledWith({ windows: true, sort_by: 'low-to-high' });
  });

  it('should be able filter with checked values', () => {
    const onFilter = jest.fn();

    renderWithTheme(<ExploreSideBar items={items} onFilter={onFilter} />);

    userEvent.click(screen.getByLabelText(/windows/i));
    userEvent.click(screen.getByLabelText(/low to high/i));

    userEvent.click(screen.getByRole('button', { name: /filter/i }));

    expect(onFilter).toBeCalledWith({ windows: true, sort_by: 'low-to-high' });
  });

  it('should be able altern between radio options', () => {
    const onFilter = jest.fn();

    renderWithTheme(<ExploreSideBar items={items} onFilter={onFilter} />);

    userEvent.click(screen.getByLabelText(/low to high/i));
    userEvent.click(screen.getByLabelText(/high to low/i));

    userEvent.click(screen.getByRole('button', { name: /filter/i }));

    expect(onFilter).toBeCalledWith({ sort_by: 'high-to-low' });
  });
});
