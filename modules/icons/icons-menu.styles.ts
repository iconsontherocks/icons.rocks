import styled from 'styled-components';
import { loadColorFromTheme } from '../../components/utils';

export const MenuOption = styled.div<{ active: boolean}>`
  cursor: pointer;
  background: ${(props) => (props.active ? '#D2DFFF' : 'transparent')};
  border-radius: 8px;
  height: 40px;
  font-size: 16px;
  line-height: 20px;
  color: ${(props) => (props.active ? loadColorFromTheme('title') : loadColorFromTheme('primary'))};
  font-weight: ${(props) => (props.active ? '700' : 'initial')};
  display: flex;
  align-items: center;
  padding: 10px 24px;
  margin: 5px 0;
  ${(props) => (!props.active && 'font-family: Neue Haas Unica W1G, sans-serif;')}

  &> span {
    margin-left: auto;
    font-weight: normal;
    font-family: Neue Haas Unica W1G, sans-serif;
  }
`;
