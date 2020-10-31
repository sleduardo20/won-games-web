import styled, { css, DefaultTheme } from 'styled-components';
import { TextFieldProps } from '.';

export const Container = styled.div``;

export const Input = styled.input`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    font-family: ${theme.font.family};
    outline: none;
    border: 0;
    padding: ${theme.spacings.xxsmall} 0;
    background: transparent;
    flex: 1;
  `}
`;

export const Label = styled.label`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.black};
    cursor: pointer;
  `}
`;

export const Icon = styled.div`
  display: flex;
  width: 2rem;
  color: ${({ theme }) => theme.colors.gray};

  & > svg {
    width: 100%;
  }
`;

const wrapperModifiers = {
  left: () => css`
    ${Icon} {
      margin-right: 0.4rem;
    }
  `,

  rigth: () => css`
    flex-direction: row-reverse;
    ${Icon} {
      margin-left: 0.4rem;
    }
  `,
  disabled: (theme: DefaultTheme) => css`
    ${Label},
    ${Input},
    ${Icon} {
      cursor: not-allowed;
      color: ${theme.colors.gray};

      &::placeholder {
        color: currentColor;
      }
    }
  `,
};

export const Wrapper = styled.div<TextFieldProps>`
  ${({ theme, iconPosition, disabled }) => css`
    display: flex;
    background: ${theme.colors.ligthGray};
    border-radius: 0.2rem;
    padding: 0 ${theme.spacings.xsmall};
    border: 0.2rem solid ${theme.colors.ligthGray};

    ${iconPosition && wrapperModifiers[iconPosition]};

    ${disabled && wrapperModifiers.disabled(theme)};

    &:focus-within {
      box-shadow: 0 0 0.5rem ${theme.colors.primary};
    }
  `}
`;
