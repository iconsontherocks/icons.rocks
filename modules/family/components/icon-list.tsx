import React, { ElementType } from 'react';
import styled, { css } from 'styled-components';
import { IconSlot } from './icon-slot';

const calculateGridFromColumns = (numberOfColumns: number, gapSize: number) => css`
    grid-template-columns: repeat(${numberOfColumns}, calc((100% / ${numberOfColumns}) - ((${gapSize}px  * ${numberOfColumns - 1}) / ${numberOfColumns}) ));  
    grid-column-gap: ${gapSize}px;
`;

const Wrapper = styled.div`
  padding: 50px;
  display: grid;
  ${calculateGridFromColumns(10, 24)};
  grid-row-gap: 24px;
  justify-items: center;
  background: #FFFFFF;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06);
  border-radius: 12px;
  width: 100%;
`;

type Props = {
  icons: Array<ElementType>
  onIconSelected: (icon: ElementType) => void
}
export const IconList = ({ icons, onIconSelected }: Props) => (
  <Wrapper>
    { icons.map((icon) => IconSlot({ icon, onClick: () => onIconSelected(icon) })) }
  </Wrapper>
);
