import React, { ElementType } from 'react';
import { Layout } from '../components';

interface Props {
    Component: ElementType
    pageProps: any
}

function AppContainer({ Component, pageProps }: Props) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default AppContainer;
