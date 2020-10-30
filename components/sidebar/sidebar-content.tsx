import React, { ReactElement, useContext, useEffect } from 'react';
import { SidebarContext, SidebarContextValues } from './sidebar';

export const SidebarContent = ({ children }: { children: ReactElement | Array<ReactElement> }) => {
  const { setValue } = useContext<SidebarContextValues>(SidebarContext);

  useEffect(() => {
    if (setValue) {
      setValue(children);
    }
  }, [children, setValue]);

  return <></>;
};
