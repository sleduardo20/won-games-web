import { Meta, Story } from '@storybook/react/types-6-0';

import ShowCase from '../components/ShowCase';

import highlightMock from '../components/HighLight/mock';
import gamesMock from '../components/GameCardSlider/mock';

export default {
  title: 'components/ShowCase',
  component: ShowCase,
  decorators: [
    Story => (
      <div style={{ margin: '0 auto' }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'won-dark',
    },
  },
} as Meta;

export const Basic: Story = args => <ShowCase {...args} />;
Basic.args = {
  title: 'Most Popular Story',
  highlight: highlightMock,
  games: gamesMock,
};

export const WithoutHighlight: Story = args => <ShowCase {...args} />;
WithoutHighlight.args = {
  title: 'Most Popular Story',
  games: gamesMock,
};

export const WithoutGames: Story = args => <ShowCase {...args} />;
WithoutGames.args = {
  title: 'Most Popular Story',
  highlight: highlightMock,
};
