import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    width: 2.4rem;
    height: 2.4rem;
    position: relative;
    z-index: ${theme.layers.modal};

    color: ${theme.colors.white};
  `}
`;

export const Badge = styled.span`
  ${({ theme }) => css`
    width: 1.6rem;
    height: 1.6rem;

    display: flex;
    align-items: center;
    justify-content: center;

    background: ${theme.colors.secondary};
    color: ${theme.colors.white};
    font-size: 1rem;
    border-radius: 50%;

    position: absolute;
    top: -0.4rem;
    right: -0.4rem;
  `}
`;
