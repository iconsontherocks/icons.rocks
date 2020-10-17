import React from 'react';

import { Footer, Header } from '../components';
import { Home } from '../modules';

export default function Page() {
  return (
    <>
      <Header title="Icons for everyone." subtitle="Beautiful & Open Source" />
      <Home />
      <Footer />
    </>
  );
}
