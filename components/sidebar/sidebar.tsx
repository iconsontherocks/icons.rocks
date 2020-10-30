import React, {
  createContext, ReactElement, useContext, useState,
} from 'react';
import { Logo } from '../icons';

import * as S from './sidebar.styles';

export type SidebarContextValues = {
  children: ReactElement | Array<ReactElement>,
  setValue: (children: ReactElement | Array<ReactElement>) => void
}

export const SidebarContext = createContext<SidebarContextValues>({
  children: null,
  setValue: () => {},
});

export const Sidebar = () => {
  const { children } = useContext(SidebarContext);

  return (
    <S.Wrapper>
      <S.Header>
        <Logo color="black" />
        <S.Description>The best open source icon sets of the web.</S.Description>
      </S.Header>
      <S.Body>
        { children }
      </S.Body>
    </S.Wrapper>
  );
};

export const SidebarProvider = ({ children }: { children: ReactElement }) => {
  const [value, setValue] = useState(null);

  return (
    <SidebarContext.Provider value={{ children: value, setValue }}>
      {children}
    </SidebarContext.Provider>
  );
};
