import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { SidebarContent } from '../../components/sidebar/sidebar-content';
import { loadColorFromTheme } from '../../components/utils';

import { IconList } from './components/icon-list';
import { getIcons } from './home-services';

const MenuOption = styled.div`
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

const MenuItem = ({ name, totalIcons, active }) => (
  <MenuOption active={active}>
    {name}
    <span>{ totalIcons }</span>
  </MenuOption>
);

export const Home = () => {
  const [icons, setIcons] = useState([]);

  useEffect(() => {
    setIcons(getIcons());
  }, []);

  const totalOfIcons = icons.reduce((acc, it) => it.totalIcons + acc, 0);
  return (
    <>
      <SidebarContent>
        {
          [{ name: 'All', totalIcons: totalOfIcons, active: true }, ...icons].map(MenuItem)
        }
      </SidebarContent>
      <IconList icons={icons} />
    </>
  );
};
