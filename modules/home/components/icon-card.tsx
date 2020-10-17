import React, { ElementType } from 'react';
import styled from 'styled-components';

import { Card } from '../../../components';
import { Gallery } from '../../../components/icons';
import { loadColorFromTheme } from '../../../components/utils';
import { IconFamily } from '../home.types';

const IconCardWrapper = styled.div`
  cursor: pointer;
`;

const StyledCard = styled(Card)`
  padding: 60px;
  display: grid;
  grid-template-columns: repeat(3, calc(33.3% - ((66px  * 2) / 3) ));
  grid-column-gap: 66px;
  grid-row-gap: 66px;
  justify-items: center;

  height: 320px;
  max-width: 320px;

  svg {
    width: 24px; 
    height: 24px;
  }
`;

const IconDetails = styled.div`
  display: flex;
  margin: 20px 0 0;
  align-items: center;
`;

const Name = styled.p`
  font-family: Neue Haas Unica W1G, sans-serif;
  font-weight: bold;
  font-size: 20px;
  color: ${loadColorFromTheme('title')};
`;

const TotalOfIcons = styled.p`
  display: flex;
  align-items: center;
  color: ${loadColorFromTheme('title')};
  font-family: Neue Haas Unica W1G, sans-serif;
  font-size: 16px;
  margin-left: auto;

  svg {
    margin: 0 10px;
  }
`;

export const IconCard = (prop: IconFamily) => (
  <IconCardWrapper>
    <StyledCard>
      {
        prop.icons.map((Component: ElementType, i) => (
        <Component key={`${prop.name}-icon-${i}`} /> //eslint-disable-line
        ))
      }
    </StyledCard>
    <IconDetails>
      <Name>{prop.name}</Name>
      <TotalOfIcons>
        <Gallery />
        { prop.totalIcons }
      </TotalOfIcons>
    </IconDetails>
  </IconCardWrapper>
);
