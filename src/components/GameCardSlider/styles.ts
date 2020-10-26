import styled, { css } from 'styled-components';
import media from 'styled-media-query';

import { GameCardSliderProps } from '.';

type ContainerProps = Pick<GameCardSliderProps, 'color'>;

export const Container = styled.div<ContainerProps>`
  ${({ theme, color }) => css`
    ${media.lessThan('huge')`
      overflow-x: hidden;
    `}
    .slick-track,
    .slick-list {
      display: flex;
    }
    .slick-slide > div {
      margin: 0 ${theme.spacings.xsmall};
      flex: 1 0 auto;
      height: 100%;
    }
    .slick-list {
      margin: 0 -${theme.spacings.xxsmall};
    }
    ${media.greaterThan('large')`
      .slick-slide > div {
        margin: 0 ${theme.spacings.xsmall};
      }
      .slick-list {
        margin: 0 -${theme.spacings.xsmall};
      }
    `}

    .slick-next, .slick-prev {
      display: block;
      width: 6.5rem;
      height: 6.5rem;
      position: absolute;
      top: 50%;
    }
    .slick-prev,
    .slick-next {
      display: block;
      width: 2.5rem;
      height: 2.5rem;
      color: ${theme.colors[color!]};
      cursor: pointer;
      position: absolute;
      top: 50%;
      padding: 0;
      transform: translate(0, -50%);
    }
    .slick-prev {
      left: -${theme.spacings.xxlarge};
    }
    .slick-next {
      right: -${theme.spacings.xxlarge};
    }

    .slick-prev.slick-disabled,
    .slick-next.slick-disabled {
      visibility: hidden;
    }
  `}
`;
