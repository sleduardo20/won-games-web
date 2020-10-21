import styled from 'styled-components';

import { LogoProps } from '.';

export const Container = styled.div<LogoProps>`
  color: ${({ theme, color }) => theme.colors[color!]};
`;
