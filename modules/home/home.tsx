import React, { useEffect, useState } from 'react';

import { IconList } from './components/icon-list';
import { getIcons, IconsMenu } from '../icons';

export const Home = () => {
  const [icons, setIcons] = useState([]);

  useEffect(() => {
    setIcons(getIcons());
  }, []);

  return (
    <>
      <IconsMenu />
      <IconList icons={icons} />
    </>
  );
};
