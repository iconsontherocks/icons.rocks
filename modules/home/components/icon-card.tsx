import React, { ElementType } from 'react';
import styled from 'styled-components';

import { Card } from '../../../components';
import { Gallery } from '../../../components/icons';
import { loadColorFromTheme } from '../../../components/utils';
import { IconFamily } from '../home.types';

const IconCardWrapper = styled.div`
  cursor: pointer;
  width: 100%;
`;

const StyledCard = styled.div`
  padding: 50px;
  display: grid;
  grid-template-columns: repeat(4, calc(25% - ((40px  * 3) / 4) ));
  grid-column-gap: 40px;
  grid-row-gap: 66px;
  justify-items: center;
  background: #FFFFFF;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06);
  border-radius: 12px;
  width: 100%;
  svg {
    width: 24px; 
    height: 24px;
  }
`;

const IconDetails = styled.div`
  display: flex;
  margin: 16px 0;
  align-items: center;
  justify-content: center;
  span {
    font-size: 22px;
  }
`;

const Name = styled.p`
  display: inline-flex;
  font-family: Neue Haas Unica W1G, sans-serif;
  font-weight: bold;
  font-size: 20px;
  color: ${loadColorFromTheme('primary')};
  margin-right: 10px;
`;

const NumberIcons = styled.p`
margin-left: 10px;
font-size: 14px;

color: ${loadColorFromTheme('title')};
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
      <span>·</span>
      <NumberIcons>
        { prop.totalIcons }
        {' '}
        Icons
      </NumberIcons>

    </IconDetails>
  </IconCardWrapper>
);
