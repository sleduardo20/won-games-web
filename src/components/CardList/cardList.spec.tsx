import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import CardList from '.';
import mockCardList from './mock';

describe('<CardList />', () => {
  it('should be able render correctly', () => {
    const { container } = renderWithTheme(
      <CardList items={mockCardList} total="R$ 330,00" />,
    );

    expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(2);
    expect(screen.getByText('R$ 330,00')).toHaveStyle({ color: '#f231a5' });
    expect(container.firstChild).toMatchSnapshot();
  });
});