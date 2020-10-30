import '../../../.jest/macth-media-mock.js';
import { screen } from '@testing-library/react';

import { renderWithTheme } from 'utils/tests/helpers';
import BannerSlider from 'components/BannerSlider';

const items = [
  {
    img:
      'https://cdn2.unrealengine.com/Diesel%2Fproductv2%2Fheather%2Fhome%2FEGS_RockstarGames_RedDeadRedemption2_G1A_00-1920x1080-308f101576da37225c889173094f373f2afc56c1.jpg?h=1080&resize=1&w=1920',
    title: 'Red Dead Redemption 2',
    subtitle: '<p>Play the new <strong>CrashLands</strong> season.</p>',
    buttonLabel: 'Buy Now',
    buttonLink: '/games/game1',
    ribbon: 'Bestselling',
  },
  {
    img:
      'https://cdn2.unrealengine.com/Diesel%2Fproductv2%2Fsnowrunner%2Fhome%2FSRACCOLADESSCORESPRESS-3840x2160-cbc8668874c154b79445b22755b3080089f1789a.png?h=1080&resize=1&w=1920',
    title: 'Snow Runner',
    subtitle: '<p>Play the new <strong>CrashLands</strong> season.</p>',
    buttonLabel: 'Buy Now',
    buttonLink: '/games/game1',
  },
];

describe('<BannerSlider />', () => {
  it('should be render BannerSlider component correctly the vertical slider', () => {
    const { container } = renderWithTheme(<BannerSlider items={items} />);

    expect(container.querySelector('.slick-vertical')).toBeInTheDocument();
  });

  it('should be render with 1 active item', () => {
    const { container } = renderWithTheme(<BannerSlider items={items} />);

    expect(container.querySelectorAll('.slick-slide')).toHaveLength(2);
    expect(container.querySelectorAll('li.slick-active')).toHaveLength(1);

    expect(
      screen.getByRole('heading', {
        name: /Red Dead Redemption 2/i,
        hidden: false,
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', {
        name: /Snow Runner/i,
        hidden: true,
      }),
    ).toBeInTheDocument();
  });

  it('should be render with the dots', () => {
    const { container } = renderWithTheme(<BannerSlider items={items} />);

    expect(container.querySelector('.slick-dots')).toBeInTheDocument();
  });
});
