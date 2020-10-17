import styled from 'styled-components';
import { Container } from '../layout/container';
import { loadColorFromTheme } from '../utils';

export const FooterWrapper = styled.div`
  height: 480px;
  background: ${loadColorFromTheme('primaryDarken')};
  padding: 66px 0;
`;

export const FooterContainer = styled(Container)`
  display: grid;
  grid-template-columns: repeat(2, calc(50% - 100px));
  grid-column-gap: 100px;
  height: 100%;
`;

export const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const SectionTitle = styled.p`
  font-weight: 500;
  font-size: 18px;
  text-transform: uppercase;
  color: ${loadColorFromTheme('primaryLighten')};
`;

export const SectionText = styled.p`
  font-family: Neue Haas Unica W1G, sans-serif;
  font-size: 20px;
  color: white;
  letter-spacing: 0.01em;
  margin: 30px 0;
`;

export const Newsletter = styled.div`
display: grid;
grid-template-columns: 70% 25%;
grid-column-gap: 16px;
`;

export const SectionBottom = styled.div<{alignRight?: boolean}>`
  display: flex;
  margin-top: auto;
  justify-content: ${(props) => (props.alignRight ? 'flex-end' : 'flex-start')};
  color: ${loadColorFromTheme('primaryLighten')};
`;
