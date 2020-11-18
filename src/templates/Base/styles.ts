import styled, { css } from 'styled-components';
import media from 'styled-media-query';

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
