import '../../../.jest/macth-media-mock.js';

import { screen, render } from '../../utils/test-utils';

import Profile from '.';

jest.mock('next/router', () => ({
  useRouter: jest.fn(() => ({ asPath: '/profile/me' })),
}));

jest.mock('templates/Base', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock Base">{children}</div>;
  },
}));

jest.mock('components/Heading', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock Heading">{children}</div>;
  },
}));

jest.mock('components/ProfileMenu', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock ProfileMenu" />;
  },
}));

describe('<Profile/>', () => {
  it('should be able render sections', () => {
    render(<Profile>Loren Ipsum</Profile>);

    expect(screen.getByText('Loren Ipsum')).toBeInTheDocument();
    expect(screen.getByText('My Profile')).toBeInTheDocument();
    expect(screen.getByTestId('Mock ProfileMenu')).toBeInTheDocument();
  });
});
