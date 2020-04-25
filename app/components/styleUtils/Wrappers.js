import styled from 'styled-components';
import { BREAKPOINT_DESKTOP_LARGE } from '../../config/constants'

export const PageWrapper = styled.div`
  display: block;
  flex: 8 8;
`;

export const ResponsiveWrapper = styled.div`
  max-width: ${BREAKPOINT_DESKTOP_LARGE}px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 20px;
  @media only screen and (max-width: ${BREAKPOINT_DESKTOP_LARGE}px) {
    max-width: 1092px;
  }
`
