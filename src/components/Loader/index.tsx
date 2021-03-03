import styled, { css } from 'styled-components';

export const Loader = styled.div`
  ${({ theme }) => css`
    border: 16px solid ${theme.colors.white};
    border-radius: 50%;
    border-top: 16px solid ${theme.colors.primary};
    width: 120px;
    height: 120px;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-animation: spin 1.3s linear infinite;
    animation: spin 1.3s linear infinite;

    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  `}
`;
