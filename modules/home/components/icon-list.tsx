import React from 'react';
import styled from 'styled-components';
import { IconCard } from './icon-card';

import { IconFamily } from '../home.types';

const List = styled.div`
  display: grid;
  grid-template-columns: repeat(3, calc(33.3% - (88px / 3) ));
  grid-column-gap: 44px;
  grid-row-gap: 16px;
  justify-items: center;
`;

interface Props {
  icons: Array<IconFamily>
}

export const IconList = ({ icons }: Props) => (
  <List>
    {
      icons.map((it: IconFamily) => (
        <IconCard key={it.name} {...it} />
      ))
    }
  </List>
);
