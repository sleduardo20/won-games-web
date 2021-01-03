import styled from 'styled-components';

import * as GameItemStyles from '../GameItem/styles';

export const Container = styled.div`
  ${GameItemStyles.Container} {
    &:last-child {
      border-bottom: 0;
    }
  }
`;
