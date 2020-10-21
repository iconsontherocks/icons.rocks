import React, { useContext, useEffect } from 'react';
import { SidebarContext } from './sidebar';

export const SidebarContent = ({ children }) => {
  const { setValue } = useContext(SidebarContext);

  useEffect(() => {
    if (setValue) setValue(children);
  }, [children, setValue]);

  return <></>;
};
