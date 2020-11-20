import styled, { css, DefaultTheme } from 'styled-components';
import media from 'styled-media-query';
import { HeadingProps, LineColors } from '.';

export const containerModifaiers = {
  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.medium};

    &::after {
      width: 3rem;
    }
  `,

  medium: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xlarge};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.xxlarge}
    `};
  `,

  huge: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.huge};
  `,

  lineLeft: (theme: DefaultTheme, lineColor: LineColors) => css`
    padding-left: ${theme.spacings.xxsmall};
    border-left: 0.7rem solid ${theme.colors[lineColor]};
  `,

  lineBottom: (theme: DefaultTheme, lineColor: LineColors) => css`
    position: relative;
    margin-bottom: ${theme.spacings.medium};

    &::after {
      content: '';
      position: absolute;
      width: 5rem;
      border-bottom: 0.5rem solid ${theme.colors[lineColor]};
      left: 0;
      bottom: -1rem;
    }
  `,
};

export const Container = styled.h2<HeadingProps>`
  ${({ theme, color, lineColor, size, lineLeft, lineBottom }) => css`
    color: ${theme.colors[color!]};

    ${lineLeft && containerModifaiers.lineLeft(theme, lineColor!)}
    ${lineBottom && containerModifaiers.lineBottom(theme, lineColor!)}
    ${!!size && containerModifaiers[size](theme)}
  `}
`;
