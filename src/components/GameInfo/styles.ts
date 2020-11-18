import styled, { css } from 'styled-components';
import media from 'styled-media-query';

import * as RibbonStyles from '../Ribbon/styles';

export const Container = styled.div`
  ${({ theme }) => css`
    position: relative;
    background: ${theme.colors.white};
    padding: ${theme.spacings.small};

    ${media.greaterThan('medium')`
      ${RibbonStyles.Container}{
        right: ${theme.spacings.small};
        top: ${theme.spacings.small};
        font-size: ${theme.font.sizes.large};
        &:before {
          border:none;
        }
      }
    `}
  `}
`;

export const Description = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.gray};
    margin-bottom: ${theme.spacings.small};

    ${media.greaterThan('medium')`
      max-width: 77rem;
    `}
  `}
`;

export const WrapperButton = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;

    > button {
      width: 100%;
      margin-bottom: ${theme.spacings.xxsmall};
    }

    ${media.greaterThan('medium')`
      flex-direction: row-reverse;

      > button {
        width: initial;
        margin-bottom: 0;
      }
    `}
  `}
`;
