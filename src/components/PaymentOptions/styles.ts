import styled, { css, DefaultTheme } from 'styled-components';
import { tint } from 'polished';

import * as ButtonStyles from '../Button/styles';

export const Container = styled.div`
  ${({ theme }) => css``}
`;

export const Body = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.small};
    background: ${theme.colors.white};
  `}
`;

export const Footer = styled.div`
  ${({ theme }) => css`
    background: ${tint(0.2, theme.colors.ligthGray)};
    color: ${theme.colors.black};
    font-weight: ${theme.font.bold};
    padding: ${theme.spacings.small};
    display: flex;
    align-items: center;

    ${ButtonStyles.Container} {
      padding-left: ${theme.spacings.xxsmall};
      padding-right: ${theme.spacings.xxsmall};
      outline: 0;
    }
  `}
`;

export const CardsList = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CardInfo = styled.span`
  ${({ theme }) => css`
    display: flex;
    align-items: center;

    img {
      margin-right: ${theme.spacings.xxsmall};
    }
  `}
`;

const ItemsStyles = (theme: DefaultTheme) => css`
  background: ${theme.colors.ligthGray};
  border-radius: 0.2rem;
  color: ${theme.colors.black};
  padding: 0 ${theme.spacings.xxsmall};
  height: 5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

export const CardItem = styled.label`
  ${({ theme }) => css`
    ${ItemsStyles(theme)};
    justify-content: space-between;

    &not(:last-child) {
      margin-bottom: ${theme.spacings.xxsmall};
    }
  `}
`;

export const AddCard = styled.div`
  ${({ theme }) => css`
    ${ItemsStyles(theme)};

    svg {
      width: 2.4rem;
      margin-left: ${theme.spacings.xxsmall};
      margin-right: ${theme.spacings.xxsmall};
    }
  `}
`;
