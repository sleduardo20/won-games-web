import { Meta, Story } from '@storybook/react/types-6-0';
import Logo, { LogoProps } from '../components/Logo';

export default {
  title: 'components/Logo',
  component: Logo,
} as Meta;

export const Basic: Story<LogoProps> = args => <Logo {...args} />;
Basic.parameters = {
  backgrounds: {
    default: 'won-dark',
  },
};
