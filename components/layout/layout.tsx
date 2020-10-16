import React from 'react';
import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
* {
    margin: 0;
    box-sizing: border-box;
}
`;

export const Layout = ({ children }: { children: React.ReactElement }) => (
  <>
    <Global />
    { children }
  </>
);
