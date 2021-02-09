import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: max-content;
  position: relative;
`;

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
