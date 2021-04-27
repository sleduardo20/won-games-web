import styled, { css } from 'styled-components';

export const Title = styled.div`
  ${({ theme }) => css`
    cursor: pointer;
    color: ${theme.colors.white};
    display: flex;
    align-items: center;
    padding-right: ${theme.spacings.small};
    z-index: ${theme.layers.alwaysOnTop};
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
    z-index: ${theme.layers.alwaysOnTop};

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

export const Overlay = styled.div`
  ${({ theme }) => css`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: ${theme.layers.overlay};
    background: rgba(0, 0, 0, 0.5);
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

    ${Content}, ${Overlay} {
      transition: transform 0.2s ease-in, opacity ${theme.transition.default};

      ${isOpen && containerModifiers.open}
      ${!isOpen && containerModifiers.close}
    }
  `}
`;
