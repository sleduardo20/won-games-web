import { screen } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';

import { renderWithTheme } from 'utils/tests/helpers';
import filterItemsMock from 'components/ExploreSideBar/mock';

import userEvent from '@testing-library/user-event';
import apolloCache from 'utils/apolloCache';

import Games from '.';

import { gamesMock, fetchMoreMock } from './mocks';

jest.mock('templates/Base', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock Base">{children}</div>;
  },
}));

jest.mock('components/ExploreSideBar', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock ExploreSidebar">{children}</div>;
  },
}));

describe('<Games />', () => {
  it('should be able render loading when starting the template', () => {
    renderWithTheme(
      <MockedProvider mocks={[]} addTypename={false}>
        <Games filterItems={filterItemsMock} />
      </MockedProvider>,
    );

    expect(screen.getByLabelText(/loading/i)).toBeInTheDocument();
  });

  it('should be able render sections correctly', async () => {
    renderWithTheme(
      <MockedProvider mocks={[gamesMock]}>
        <Games filterItems={filterItemsMock} />
      </MockedProvider>,
    );

    expect(screen.getByLabelText(/loading/i)).toBeInTheDocument();

    expect(
      await screen.findByTestId('Mock ExploreSidebar'),
    ).toBeInTheDocument();

    expect(await screen.findByText(/Sample Game/i)).toBeInTheDocument();

    expect(
      await screen.findByRole('button', { name: /show more/i }),
    ).toBeInTheDocument();
  });

  it('should be able render more games when show more is clicked', async () => {
    renderWithTheme(
      <MockedProvider mocks={[gamesMock, fetchMoreMock]} cache={apolloCache}>
        <Games filterItems={filterItemsMock} />
      </MockedProvider>,
    );

    expect(await screen.findByText(/Sample Game/i)).toBeInTheDocument();

    userEvent.click(await screen.findByRole('button', { name: /show more/i }));

    expect(await screen.findByText(/Fetch More Game/i)).toBeInTheDocument();
  });
});
