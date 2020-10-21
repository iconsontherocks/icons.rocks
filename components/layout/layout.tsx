import Head from 'next/head';
import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Sidebar, SidebarProvider } from '../sidebar';
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

const PageContainer = styled.div`
  display: flex;
  
`;

const Page = styled.div`
  height: 100vH;
  overflow-y: auto;
  padding: 44px;
  flex: 1;
`;

export const Layout = ({ children }: { children: React.ReactElement }) => (
  <>
    <Head>
      <link rel="stylesheet" href="https://use.typekit.net/zpz7vlb.css" />
    </Head>

    <Global />

    <SidebarProvider>
      <PageContainer>
        <Sidebar />
        <Page>
          { children }
        </Page>
      </PageContainer>
    </SidebarProvider>
  </>
);
