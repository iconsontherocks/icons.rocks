import React, { useEffect, useState } from 'react';
import Link from 'next/link';

import { SidebarContent } from '../../components/sidebar/sidebar-content';

import { getIcons } from './icons-services';
import { IconFamily } from './icons.types';
import { MenuOption } from './icons-menu.styles';

const MenuItem = ({
  name, totalIcons, active, path,
}: Partial<IconFamily & { active: boolean }>) => (
  <Link href={path ? `/family/${path}` : '/'}>
    <MenuOption active={active}>
      <>
        {name}
        <span>{ totalIcons }</span>
      </>

    </MenuOption>
  </Link>
);

type Props = {
  currentFamily?: string;
}

export const IconsMenu = ({ currentFamily }: Props) => {
  const [icons, setIcons] = useState([]);

  useEffect(() => {
    setIcons(getIcons());
  }, []);

  const totalOfIcons = icons.reduce((acc, it) => it.totalIcons + acc, 0);

  return (
    <>
      <SidebarContent>
        {
          [{ name: 'All', totalIcons: totalOfIcons }, ...icons].map((it) => MenuItem({
            ...it,
            active: it.path === currentFamily || (it.name === 'All' && !currentFamily),
          }))
        }
      </SidebarContent>
    </>
  );
};

IconsMenu.defaultProps = {
  currentFamily: null,
};
