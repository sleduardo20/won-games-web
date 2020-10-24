import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import Banner from '../../components/Banner';

const props = {
  img: 'https://souce.unsplash.com/user/willianjusten/104x580',
  title: 'Defy Death',
  subtitle: '<p> Play the new <strong>CrashLands</strong> season. </p>',
  buttonLabel: 'Buy now',
  buttonLink: '/games/defy-death',
};

describe('<Banner />', () => {
  it('should render Banner correctly', () => {
    const { container } = renderWithTheme(<Banner {...props} />);

    expect(
      screen.getByRole('heading', { name: /Defy Death/i }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: /Play the new CrashLands season./i }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('img', { name: /Defy Death/i }),
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
