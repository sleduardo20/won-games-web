import styled, { css } from 'styled-components';

export const Nav = styled.nav`
  ${({ theme }) => css`
    width: 26rem;
    display: flex;
    flex-direction: column;

    a:not(:last-child) {
      border-bottom: 0.1rem solid ${theme.colors.ligthGray};
    }
  `}
`;

export const UserName = styled.span`
  ${({ theme }) => css`
    padding: 0 ${theme.spacings.xxsmall};
  `}
`;

export const Option = styled.a`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    text-decoration: none;
    background: ${theme.colors.white};
    color: ${theme.colors.black};
    padding: ${theme.spacings.xsmall} ${theme.spacings.small};
    transition: background, color, ${theme.transition.default};
    cursor: pointer;

    &:hover {
      background: ${theme.colors.primary};
      color: ${theme.colors.white};
    }

    > svg {
      width: 2.4rem;
      height: 2.4rem;
    }

    > span {
      margin-left: ${theme.spacings.xsmall};
    }
  `}
`;
