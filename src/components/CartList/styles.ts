import styled, { css } from 'styled-components';
import { tint } from 'polished';
import media from 'styled-media-query';

import * as EmptyStyles from '../Empty/styles';

type ContainerProps = {
  isEmpty: boolean;
};

export const Container = styled.div<ContainerProps>`
  ${({ theme, isEmpty }) => css`
    background: ${theme.colors.white};
    display: flex;
    flex-direction: column;
    align-self: start;

    ${isEmpty &&
    css`
      ${EmptyStyles.Container} {
        padding-bottom: ${theme.spacings.medium};
      }

      ${EmptyStyles.Image} {
        max-width: 20rem;
      }

      ${EmptyStyles.Title} {
        font-size: ${theme.font.sizes.large};
      }

      ${EmptyStyles.Description} {
        color: ${theme.colors.black};
        font-size: ${theme.font.sizes.medium};
      }
    `}
  `}
`;

export const Footer = styled.div`
  ${({ theme }) => css`
    background: ${tint(0.2, theme.colors.ligthGray)};
    color: ${theme.colors.black};
    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.small};
    padding: 2rem;
    display: flex;
    justify-content: space-between;

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.medium};
      padding: ${theme.spacings.small};
    `}
  `}
`;

export const Total = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
  `}
`;

export const Loading = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.white};
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40rem;
    min-width: 56rem;

    svg {
      height: 10rem;
      width: 10rem;
    }
  `}
`;
