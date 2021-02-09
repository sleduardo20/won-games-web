import styled, { css } from 'styled-components';

export const Title = styled.div`
  ${({ theme }) => css`
    cursor: pointer;
    color: ${theme.colors.white};
    display: flex;
    align-items: center;
    padding-right: ${theme.spacings.small};
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    background: ${theme.colors.white};
    color: ${theme.colors.black};
    margin-top: ${theme.spacings.small};
    position: absolute;
    right: 0;

    &::before {
      content: '';
      position: absolute;
      top: -1.2rem;
      right: 2.4rem;
      border-right: 1.2rem solid transparent;
      border-left: 1.2rem solid transparent;
      border-bottom: 1.2rem solid ${theme.colors.white};
    }
  `}
`;

type ContainerProps = {
  isOpen?: boolean;
};

const containerModifiers = {
  open: () => css`
    opacity: 1;
    pointer-events: auto;
    transform: translateY(0);
  `,
  close: () => css`
    opacity: 0;
    pointer-events: none;
    transform: translateY(-1rem);
  `,
};

export const Container = styled.div<ContainerProps>`
  ${({ theme, isOpen }) => css`
    width: max-content;
    position: relative;

    ${Content} {
      transition: transform 0.2s ease-in, opacity ${theme.transition.default};

      ${isOpen && containerModifiers.open}
      ${!isOpen && containerModifiers.close}
    }
  `}
`;
