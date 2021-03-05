import styled, { css } from 'styled-components';

export const Loader = styled.div`
  ${({ theme }) => css`
    border: 16px solid ${theme.colors.white};
    border-radius: 50%;
    border-top: 16px solid ${theme.colors.primary};
    width: 120px;
    height: 120px;
    /* position: absolute;
    top: 50%;
    left: 50%; */
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
const Eclipce = styled.div`
  z-index: 50;
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;

  & div {
    position: absolute;
    top: 33px;
    width: 13px;
    height: 13px;
    border-radius: 50%;
    background: #ffff;
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
  }
  & div:nth-child(1) {
    left: 8px;
    animation: lds-ellipsis1 0.6s infinite;
  }
  & div:nth-child(2) {
    left: 8px;
    animation: lds-ellipsis2 0.6s infinite;
  }
  & div:nth-child(3) {
    left: 32px;
    animation: lds-ellipsis2 0.6s infinite;
  }
  & div:nth-child(4) {
    left: 56px;
    animation: lds-ellipsis3 0.6s infinite;
  }
  @keyframes lds-ellipsis1 {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes lds-ellipsis3 {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
  }
  @keyframes lds-ellipsis2 {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(24px, 0);
    }
  }
`;

export const LoaderEclipse = () => {
  return (
    <Eclipce>
      <div />
      <div />
      <div />
      <div />
    </Eclipce>
  );
};
