import { screen } from '@testing-library/react';

import { renderWithTheme } from 'utils/tests/helpers';

import GameItem from '.';

const props = {
  title: 'Red Dead III',
  img:
    'https://cdn2.unrealengine.com/Diesel%2Fproductv2%2Fheather%2Fhome%2FEGS_RockstarGames_RedDeadRedemption2_G1A_00-1920x1080-308f101576da37225c889173094f373f2afc56c1.jpg?h=1080&resize=1&w=1920',
  price: 'R$ 250,00',
};

describe('<GameItem />', () => {
  it('should be able render correctly', () => {
    renderWithTheme(<GameItem {...props} />);

    expect(screen.getByRole('heading', { level: 3 })).toBeInTheDocument();

    expect(screen.getByRole('img')).toBeInTheDocument();

    expect(screen.getByText('R$ 250,00')).toBeInTheDocument();
  });
});
