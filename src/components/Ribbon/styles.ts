import styled, { css, DefaultTheme } from 'styled-components';
import { RibbonColors, RibbonProps } from '.';

const containerModifiers = {
  color: (theme: DefaultTheme, colors: RibbonColors) => css`
    background-color: ${theme.colors[colors]};
  `,
  normal: (theme: DefaultTheme) => css`
    height: 3.6rem;
    font-size: ${theme.font.sizes.small};
  `,

  small: (theme: DefaultTheme) => css`
    height: 2.6rem;
    font-size: ${theme.font.sizes.xsmall};
  `,
};

export const Container = styled.div<Omit<RibbonProps, 'children'>>`
  ${({ theme, color, size }) => css`
    ${!!size && containerModifiers[size](theme)}
    ${!!color && containerModifiers.color(theme, color)}
  `}
`;
