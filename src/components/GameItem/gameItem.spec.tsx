import userEvent from '@testing-library/user-event';
import { screen, render } from '../../utils/test-utils';

import GameItem from '.';

import { defaultValuesCartContext } from '../../hooks/useCart';

const props = {
  id: '1',
  title: 'Red Dead III',
  img:
    'https://cdn2.unrealengine.com/Diesel%2Fproductv2%2Fheather%2Fhome%2FEGS_RockstarGames_RedDeadRedemption2_G1A_00-1920x1080-308f101576da37225c889173094f373f2afc56c1.jpg?h=1080&resize=1&w=1920',
  price: 'R$ 250,00',
};

describe('<GameItem />', () => {
  it('should be able render correctly', () => {
    render(<GameItem {...props} />);

    expect(screen.getByRole('heading', { level: 3 })).toBeInTheDocument();

    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      props.img,
    );

    expect(screen.getByText('R$ 250,00')).toBeInTheDocument();
  });

  it('should be able remove if the item is inside the cart and call remove', () => {
    const cartProviderProps = {
      ...defaultValuesCartContext,
      isInCart: () => true,
      removeFromCart: jest.fn(),
    };

    render(<GameItem {...props} />, { cartProviderProps });

    const removeLink = screen.getByText(/remove/i);

    userEvent.click(removeLink);

    expect(cartProviderProps.removeFromCart).toHaveBeenCalledWith('1');
  });

  it('should be able render the item with download link', () => {
    const downlowdLink = 'http://www.example.com/';

    render(<GameItem {...props} downlowdLink={downlowdLink} />);

    expect(
      screen.getByRole('link', { name: `Get ${props.title} here` }),
    ).toHaveAttribute('href', downlowdLink);
  });

  it('should be able render the payment info', () => {
    const paymentInfo = {
      flag: 'mastercard',
      img: '/img/master-card.png',
      number: '**** **** **** 5669',
      purchaseDate: 'Purchased made on 07/12/2020 at 21:26',
    };

    render(<GameItem {...props} paymentInfo={paymentInfo} />);

    expect(screen.getByRole('img', { name: paymentInfo.flag })).toHaveAttribute(
      'src',
      paymentInfo.img,
    );

    expect(screen.getByText('**** **** **** 5669')).toBeInTheDocument();
    expect(
      screen.getByText('Purchased made on 07/12/2020 at 21:26'),
    ).toBeInTheDocument();
  });

  it('should be able render free game when theres no paymentInfo', () => {
    const paymentInfo = {
      flag: null,
      img: null,
      number: 'Free Game',
      purchaseDate: 'Purchased made on 07/12/2020 at 21:26',
    };

    render(<GameItem {...props} paymentInfo={paymentInfo} />);

    expect(screen.getByText(/free game/i)).toBeInTheDocument();
  });
});
