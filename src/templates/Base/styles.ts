import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;
`;

export const SectionFooter = styled.section`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.xlarge};
    padding: calc(${theme.spacings.xlarge} * 2) 0 ${theme.spacings.xsmall} 0;
    background-color: ${theme.colors.white};
    clip-path: polygon(0 5%, 100% 0, 100% 100%, 0 100%);

    ${media.greaterThan('medium')`
      padding-top: cacl(${theme.spacings.xxxlarge} * 2);
      clip-path: polygon(0 15%, 100% 0, 100% 100%, 0 100%);
    `}
  `}
`;

export const Content = styled.div`
  margin-top: ${({ theme }) => theme.spacings.large};
  flex: 1 0 auto;
`;
