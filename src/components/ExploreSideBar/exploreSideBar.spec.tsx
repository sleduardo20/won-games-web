import userEvent from '@testing-library/user-event';
import { css } from 'styled-components';
import { screen, render } from '../../utils/test-utils';
import items from './mock';

import ExploreSideBar from '.';
import { Overlay } from './styles';

describe('<ExploreSideBar/>', () => {
  it('should be able render headings', () => {
    render(<ExploreSideBar onFilter={jest.fn} items={items} />);

    expect(screen.getByRole('heading', { name: /price/i })).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: /sort by/i }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: /platforms/i }),
    ).toBeInTheDocument();

    expect(screen.getByRole('heading', { name: /genre/i })).toBeInTheDocument();
  });

  it('should be able render inputs', () => {
    render(<ExploreSideBar onFilter={jest.fn} items={items} />);

    expect(
      screen.getByRole('checkbox', { name: /under \$50/i }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('radio', { name: /low to high/i }),
    ).toBeInTheDocument();
  });

  it('should be able render filter button', () => {
    render(<ExploreSideBar onFilter={jest.fn} items={items} />);

    expect(screen.getByRole('button', { name: /filter/i })).toBeInTheDocument();
  });

  it('should be able check initial values that are passed in', () => {
    render(
      <ExploreSideBar
        onFilter={jest.fn}
        items={items}
        initialValues={{
          platforms: ['windows'],
          sort_by: 'low-to-high',
        }}
      />,
    );

    expect(screen.getByRole('checkbox', { name: /windows/i })).toBeChecked();

    expect(screen.getByRole('radio', { name: /low to high/i })).toBeChecked();
  });

  it('should be able filter with initial values', () => {
    const onFilter = jest.fn();

    render(
      <ExploreSideBar
        items={items}
        initialValues={{
          platforms: ['windows'],
          sort_by: 'low-to-high',
        }}
        onFilter={onFilter}
      />,
    );

    expect(onFilter).toBeCalledWith({
      platforms: ['windows'],
      sort_by: 'low-to-high',
    });
  });

  it('should be able filter with checked values', () => {
    const onFilter = jest.fn();

    render(<ExploreSideBar items={items} onFilter={onFilter} />);

    userEvent.click(screen.getByLabelText(/windows/i));
    userEvent.click(screen.getByLabelText(/linux/i));
    userEvent.click(screen.getByLabelText(/low to high/i));

    expect(onFilter).toHaveBeenCalledTimes(4);

    expect(onFilter).toBeCalledWith({
      platforms: ['windows', 'linux'],
      sort_by: 'low-to-high',
    });
  });

  it('should be able altern between radio options', () => {
    const onFilter = jest.fn();

    render(<ExploreSideBar items={items} onFilter={onFilter} />);

    userEvent.click(screen.getByLabelText(/low to high/i));
    userEvent.click(screen.getByLabelText(/high to low/i));

    expect(onFilter).toBeCalledWith({ sort_by: 'high-to-low' });
  });

  it('should be able open/close sidebar when filtering on mobile', () => {
    const { container } = render(
      <ExploreSideBar items={items} onFilter={jest.fn} />,
    );

    const variant = {
      media: '(max-width: 768px)',
      modifier: String(
        css`
          ${Overlay}
        `,
      ),
    };

    const element = container.firstChild;

    expect(element).not.toHaveStyleRule('opacity', '1', variant);

    userEvent.click(screen.getByLabelText(/open filters/i));

    expect(element).toHaveStyleRule('opacity', '1', variant);

    userEvent.click(screen.getByLabelText(/close filters/i));

    expect(element).not.toHaveStyleRule('opacity', '1', variant);

    userEvent.click(screen.getByLabelText(/open filters/i));
    userEvent.click(screen.getByRole('button', { name: /filter/i }));

    expect(element).not.toHaveStyleRule('opacity', '1', variant);
  });
});
