import styled, { css, DefaultTheme } from 'styled-components';
import { TextFieldProps } from '.';

type ContainerProps = Pick<TextFieldProps, 'disabled' | 'iconPosition'> & {
  error?: boolean;
};

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

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    background: ${theme.colors.ligthGray};
    border-radius: 0.2rem;
    padding: 0 ${theme.spacings.xsmall};
    border: 0.2rem solid ${theme.colors.ligthGray};

    &:focus-within {
      box-shadow: 0 0 0.5rem ${theme.colors.primary};
    }
  `}
`;
export const Error = styled.span`
  color: ${({ theme }) => theme.colors.red};
  font-size: ${({ theme }) => theme.font.sizes.xsmall};
`;

const containerModifiers = {
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
  error: (theme: DefaultTheme) => css`
    ${Wrapper} {
      border-color: ${theme.colors.red};
    }

    ${Icon},
    ${Label} {
      color: ${theme.colors.red};
    }
  `,
};

export const Container = styled.div<ContainerProps>`
  ${({ theme, iconPosition, disabled, error }) => css`
    ${iconPosition && containerModifiers[iconPosition]};

    ${error && containerModifiers.error(theme)}

    ${disabled && containerModifiers.disabled(theme)};
  `}
`;
