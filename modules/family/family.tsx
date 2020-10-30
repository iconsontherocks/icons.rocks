import React, { ElementType, useEffect, useState } from 'react';
import { renderToString } from 'react-dom/server';

import { IconFamily, IconsMenu, loadIconsFromAssets } from '../icons';
import { IconList } from './components/icon-list';

type Props = {
  family: IconFamily
}
export const Family = ({ family }: Props) => {
  const [icons, setIcons] = useState((loadIconsFromAssets(family.icons as string[])));

  useEffect(() => {
    setIcons((loadIconsFromAssets(family.icons as string[])));
  }, [family]);

  const copyIcon = (Icon: ElementType) => {
    const iconAsString = renderToString(<Icon />);
    console.log(iconAsString);
  };

  return (
    <>
      <IconsMenu currentFamily={family.path} />
      <h1>{ family.name }</h1>

      <IconList icons={icons} onIconSelected={copyIcon} />
    </>
  );
};
