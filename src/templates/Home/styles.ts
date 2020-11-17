import styled, { css } from 'styled-components';
import media from 'styled-media-query';

import * as HeadingStyles from 'components/Heading/styles';

import * as HighLightStyles from 'components/HighLight/styles';

export const SectionBanner = styled.section`
  ${({ theme }) => css`
    margin: ${theme.spacings.large} calc(-${theme.grid.gutter} / 2);

    ${media.greaterThan('medium')`
      margin: ${theme.spacings.large} 0;
      position: relative;
      z-index: ${theme.layers.base};
    `}
  `}
`;

export const SectionNews = styled.div`
  ${({ theme }) => css`
    margin-bottom: calc(${theme.spacings.xxlarge} * 2);

    ${HeadingStyles.Container} {
      color: ${theme.colors.black};
    }

    ${media.greaterThan('large')`
      margin-top: -13rem;
    `}

    ${media.greaterThan('medium')`
      margin-bottom: 0;
      padding: 14rem 0 10rem 0;
      background-color: ${theme.colors.white};
      clip-path: polygon(0 0, 100% 15%, 100% 100%, 0 85%);
      
    `}
  `}
`;

export const SectionUpcomming = styled.div`
  ${({ theme }) => css`
    ${HighLightStyles.Container} {
      margin-top: calc(${theme.spacings.xxlarge} / 2);
    }
  `}
`;

export const SectionFooter = styled.section`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.large};
    padding: ${theme.spacings.xxlarge} 0 ${theme.spacings.xsmall} 0;
    background-color: ${theme.colors.white};
    clip-path: polygon(0 5%, 100% 0, 100% 100%, 0 100%);

    ${media.greaterThan('medium')`
      padding-top: cacl(${theme.spacings.xxlarge} * 2);
      clip-path: polygon(0 15%, 100% 0, 100% 100%, 0 100%);
    `}
  `}
`;
