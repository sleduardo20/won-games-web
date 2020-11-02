import styled, { css } from 'styled-components';

import * as LogoStyles from 'components/Logo/styles';
import * as HeadingStyles from 'components/Heading/styles';
import media from 'styled-media-query';

export const Container = styled.main`
  height: 100vh;
  display: grid;

  ${media.greaterThan('medium')`
    grid-template-columns: repeat(2, 1fr);
  `}
`;

export const BannerBlock = styled.div`
  ${({ theme }) => css`
    position: relative;
    padding: ${theme.spacings.xxxlarge} ${theme.spacings.xxxlarge}
      ${theme.spacings.xxxlarge};
    background-image: url(/img/auth-bg.jpg);
    background-size: cover;
    background-position: center center;

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: ${theme.colors.black};
      opacity: 0.85;
    }

    ${media.lessThan('medium')`
      display: none;
    `}
  `}
`;

export const BannerContent = styled.div`
  ${({ theme }) => css`
    height: 100%;
    color: ${theme.colors.white};
    position: relative;
    z-index: ${theme.layers.base};
    display: grid;
    grid-template-columns: 1fr;
    justify-content: space-between;

    > a {
      width: fit-content;
      height: fit-content;
    }
  `}
`;

export const Subtitle = styled.h3`
  font-size: ${({ theme }) => theme.font.sizes.xxlarge};
  font-weight: ${({ theme }) => theme.font.ligth};
  margin-top: ${({ theme }) => theme.spacings.xxsmall};

  > strong {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Footer = styled.h6`
  align-self: end;
  font-weight: ${({ theme }) => theme.font.ligth};
  text-align: center;
  font-size: ${({ theme }) => theme.font.sizes.xsmall};
`;

export const Content = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    display: grid;
    align-items: center;
    justify-content: center;
  `}
`;

export const ContentWrapper = styled.div`
  ${({ theme }) => css`
    width: 30rem;

    ${media.greaterThan('medium')`
        width: 36rem;
    `}

    ${LogoStyles.Container} {
      margin: 0 auto ${theme.spacings.xxxlarge};
    }

    ${HeadingStyles.Container} {
      margin-bottom: ${theme.spacings.medium};
    }
  `}
`;
