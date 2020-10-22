import styled, { css, DefaultTheme } from 'styled-components';
import media from 'styled-media-query';
import { HeadingProps } from '.';

const containerModifaiers = {
  lineLeft: (theme: DefaultTheme) => css`
    padding-left: ${theme.spacings.xxsmall};
    border-left: 0.5rem solid ${theme.colors.secondary};
  `,
  lineBottom: (theme: DefaultTheme) => css`
    position: relative;
    margin-bottom: ${theme.spacings.medium};

    &::after {
      content: '';
      position: absolute;
      width: 5rem;
      border-bottom: 0.5rem solid ${theme.colors.primary};
      left: 0;
      bottom: -1rem;
    }
  `,
};

export const Container = styled.h2<HeadingProps>`
  ${({ theme, color, lineLeft, lineBottom }) => css`
    font-size: ${theme.font.sizes.xlarge};
    color: ${theme.colors[color!]};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.xxlarge}
    `};

    ${lineLeft && containerModifaiers.lineLeft(theme)}
    ${lineBottom && containerModifaiers.lineBottom(theme)}
  `}
`;
