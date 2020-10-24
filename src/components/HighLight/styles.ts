import styled, { css } from 'styled-components';
import media from 'styled-media-query';
import { HighLightProps } from '.';

export const Content = styled.div`
  ${({ theme }) => css`
    grid-area: content;
    z-index: ${theme.layers.base};
    padding: ${theme.spacings.xsmall};

    ${media.greaterThan('medium')`
      align-self: end;
      padding: ${theme.spacings.large};
    `}
  `}
`;

export const FloatImage = styled.img`
  ${({ theme }) => css`
    grid-area: floatimage;
    align-self: end;
    z-index: ${theme.layers.base};
    max-height: 23rem;
    max-width: 100%;

    ${media.greaterThan('medium')`
      max-height: 32rem;
    `};
  `}
`;

export const Title = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.white};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.xlarge};
    `}
  `}
`;

export const SubTitle = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.ligth};
    color: ${theme.colors.white};
    margin-bottom: ${theme.spacings.medium};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.large};
    `}
  `}
`;

type ContainerProps = Pick<HighLightProps, 'backgroundImage' | 'alignment'>;

const containerModfiers = {
  right: () => css`
    grid-template-areas: 'floatimage content';
    grid-template-columns: 1.3fr 2fr;
    ${Content} {
      text-align: right;
    }
  `,
  left: () => css`
    grid-template-areas: 'content floatimage';
    grid-template-columns: 2fr 1.3fr;
    ${Content} {
      text-align: left;
    }

    ${FloatImage} {
      justify-self: end;
    }
  `,
};

export const Container = styled.section<ContainerProps>`
  ${({ backgroundImage, alignment }) => css`
    position: relative;
    background-image: url(${backgroundImage});
    background-position: center center;
    background-size: cover;
    height: 23rem;
    display: grid;

    ${media.greaterThan('medium')`
      height: 32rem;
    `}

    ${containerModfiers[alignment!]}

    &::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.6);
    }
  `}
`;