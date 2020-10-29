import styled, { css } from 'styled-components';
import { CheckBoxProps } from '.';

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const Label = styled.label<Pick<CheckBoxProps, 'labelColor'>>`
  ${({ theme, labelColor }) => css`
    color: ${theme.colors[labelColor!]};
    cursor: pointer;
    line-height: 1.8rem;
    padding-left: ${theme.spacings.xxsmall};
  `}
`;

export const Input = styled.input`
  ${({ theme }) => css`
    width: 1.8rem;
    height: 1.8rem;
    position: relative;
    appearance: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0.2rem solid ${theme.colors.darkGray};
    border-radius: 0.2rem;
    outline: none;
    transition: background border ${theme.transition.fast};

    &::before {
      content: '';
      width: 0.6rem;
      height: 0.9rem;
      border: 0.2rem solid ${theme.colors.white};
      border-top: 0;
      border-left: 0;
      transform: rotate(45deg);
      position: absolute;
      top: 0.1rem;
      opacity: 0;
      transition: ${theme.transition.fast};
    }

    &:focus {
      box-shadow: 0 0 0.5rem ${theme.colors.primary};
    }

    &:checked {
      border-color: ${theme.colors.primary};
      background: ${theme.colors.primary};

      &::before {
        opacity: 1;
      }
    }
  `}
`;
