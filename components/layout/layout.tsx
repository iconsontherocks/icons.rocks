import Head from 'next/head';
import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { loadColorFromTheme } from '../utils';

const Global = createGlobalStyle`
* {
    margin: 0;
    box-sizing: border-box;
    font-family: p22-mackinac-pro, serif;
}

body {
    background: ${loadColorFromTheme('background')};
}
`;

export const Layout = ({ children }: { children: React.ReactElement }) => (
  <>
    <Head>
      <link rel="stylesheet" href="https://use.typekit.net/zpz7vlb.css" />
    </Head>

    <Global />
    { children }
  </>
);
