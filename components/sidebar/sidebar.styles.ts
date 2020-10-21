import styled from 'styled-components';
import { loadColorFromTheme } from '../utils';

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  min-height: 100vH;
  flex: 0 0 288px;
  padding: 25px 12px;
  background: ${loadColorFromTheme('backgroundDarken2')};
  flex-direction: column;
`;

export const Header = styled.div`
  margin: 50px 16px 28px;
`;

export const Description = styled.h2`
  font-size: 16px;
  letter-spacing: -0.01em;
  color: #7E7AA2;
  margin: 16px 0;
  width: 70%;
`;

export const Body = styled.div`
`;
