import React, { useEffect, useState } from 'react';

import { IconList } from './components/icon-list';
import { getIcons } from './home-services';

export const Home = () => {
  const [icons, setIcons] = useState([]);

  useEffect(() => {
    setIcons(getIcons());
  }, []);

  return (
    <IconList icons={icons} />
  );
};
