import React, { useState } from 'react';

import { IconList } from './components/icon-list';
import { getIcons, IconsMenu } from '../icons';

export const Home = () => {
  const [icons] = useState(getIcons());

  return (
    <>
      <IconsMenu />
      <IconList icons={icons} />
    </>
  );
};
