import styled, { css } from 'styled-components';
import { lighten, darken } from 'polished';

import * as ButtonStyles from '../Button/styles';
import * as TextFieldStyles from '../TextField/styles';

export const Container = styled.div`
  ${TextFieldStyles.Container} {
    margin: ${({ theme }) => theme.spacings.xxsmall} 0;
  }

  ${ButtonStyles.Container} {
    margin: ${({ theme }) => theme.spacings.medium} auto
      ${({ theme }) => theme.spacings.xsmall};
  }
`;

export const FormLoading = styled.img.attrs(() => ({
  src: '/img/dots.svg',
  alt: 'Waiting...',
}))`
  width: 4rem;
`;

export const FormError = styled.div`
  ${({ theme }) => css`
    text-align: center;
    color: red;
    font-size: ${({ theme }) => theme.font.sizes.small};

    svg {
      margin-left: ${theme.spacings.xxsmall};
      width: 1.6rem;
    }
  `}
`;

export const FormSuccess = styled.div`
  ${({ theme }) => css`
    text-align: center;
    color: ${theme.colors.black};
    font-size: ${({ theme }) => theme.font.sizes.small};

    svg {
      margin-right: ${theme.spacings.xxsmall};
      width: 2.4rem;
      color: ${theme.colors.secondary};
    }
  `}
`;

export const FormLink = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.black};
    text-align: center;

    > a {
      color: ${theme.colors.secondary};
      margin-left: ${theme.spacings.xxsmall};
      text-decoration: none;
      border-bottom: 0.1rem solid ${theme.colors.secondary};
      transition: color, border, ${theme.transition.fast};

      &:hover {
        color: ${darken(0.1, theme.colors.secondary)};
        border-bottom: 0.1rem solid ${darken(0.1, theme.colors.secondary)};
      }
    }
  `}
`;

export const ForgotPassword = styled.a`
  ${({ theme }) => css`
    display: block;
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.black};
    text-decoration: none;
    text-align: center;

    &:hover {
      color: ${lighten(0.2, theme.colors.black)};
    }
  `}
`;
