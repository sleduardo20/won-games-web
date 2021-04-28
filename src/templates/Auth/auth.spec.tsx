import Auth from 'templates/Auth';
import { screen, render } from '../../utils/test-utils';

describe('<Auth/>', () => {
  it('should be able render all components and children correctly', () => {
    render(
      <Auth title="Auth Title">
        <input type="text" />
      </Auth>,
    );

    expect(screen.getAllByRole('img', { name: /won games/i })).toHaveLength(2);

    expect(
      screen.getByRole('heading', {
        name: /All your favorite games in one place/i,
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', {
        name: /Won Games 2020 Todos os Direitos Reservados/i,
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: /Auth title/i }),
    ).toBeInTheDocument();

    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });
});
