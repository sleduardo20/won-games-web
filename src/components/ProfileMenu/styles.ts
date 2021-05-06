import styled, { css, DefaultTheme } from 'styled-components';
import media from 'styled-media-query';

export const Nav = styled.nav`
  ${({ theme }) => css`
    display: flex;
    border-bottom: 0.1rem solid ${theme.colors.ligthGray};

    ${media.greaterThan('medium')`
      flex-direction: column;
      border: 0;

      a:not(:last-child) {
        border-bottom: 0.1rem solid ${theme.colors.ligthGray};
      }
    `}
  `}
`;

const linkModifiers = {
  default: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.white};
    color: ${theme.colors.black};
  `,
  active: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
  `,
};

type LinkProps = {
  isActive?: boolean;
};

export const ItemLink = styled.a<LinkProps>`
  ${({ theme, isActive }) => css`
    display: flex;
    align-items: center;
    padding: ${theme.spacings.xsmall} ${theme.spacings.small};
    transition: background, color, ${theme.transition.default};
    text-decoration: none;
    cursor: pointer;

    > span {
      margin-left: ${theme.spacings.xxsmall};
    }

    &:hover {
      background: ${theme.colors.primary};
      color: ${theme.colors.white};

      > span {
        margin-left: ${theme.spacings.xsmall};
      }
    }

    ${media.lessThan('medium')`
      justify-content: center;
      flex: 1;

      > span {
        display: none;
      }
    `}

    ${!isActive && linkModifiers.default(theme)};
    ${isActive && linkModifiers.active(theme)};
  `}
`;
