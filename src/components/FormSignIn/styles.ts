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
