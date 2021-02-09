import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    width: 2.4rem;
    height: 2.4rem;

    color: ${theme.colors.white};
  `}
`;
