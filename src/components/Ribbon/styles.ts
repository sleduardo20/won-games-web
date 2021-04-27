import styled, { css, DefaultTheme } from 'styled-components';

import { RibbonColors, RibbonProps } from '.';

const containerModifiers = {
  color: (theme: DefaultTheme, color: RibbonColors) => css`
    background-color: ${theme.colors[color]};

    &::before {
      border-left-color: filter(brightness(110%));
      border-top-color: filter(brightness(110%));
    }
  `,
  normal: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.small};
    height: 3.6rem;
    right: -2rem;
    padding: 0 ${theme.spacings.small};

    &::before {
      top: 3.6rem;
      border-top-width: 1rem;
      border-right-width: 2rem;
    }
  `,

  small: (theme: DefaultTheme) => css`
    height: 2.6rem;
    font-size: ${theme.font.sizes.xsmall};
    right: -1.5rem;
    padding: 0 ${theme.spacings.small};

    &::before {
      top: 2.6rem;
      border-top-width: 0.7rem;
      border-right-width: 1.5rem;
    }
  `,
};

export const Container = styled.div<Omit<RibbonProps, 'children'>>`
  ${({ theme, color, size }) => css`
    position: absolute;
    top: ${theme.spacings.xsmall};
    display: flex;
    align-items: center;
    font-weight: ${theme.font.bold};
    color: ${theme.colors.white};
    border-radius: ${theme.border.radius} ${theme.border.radius} 0
      ${theme.border.radius};

    &::before {
      content: '';
      position: absolute;
      right: 0;
      border-style: solid;
      border-left-width: 0rem;
      border-bottom-width: 1rem;
      border-right-color: transparent;
      border-bottom-color: transparent;
    }

    ${!!color && containerModifiers.color(theme, color)}
    ${!!size && containerModifiers[size](theme)}
  `}
`;
