import React, { ElementType } from 'react';

import styled from 'styled-components';
import { ClipboardIcon } from '../../../components/icons';

const CopyWrapper = styled.div`
  display: none;
  position: absolute;
  top: -16px;
  left: 60px;
  width: 99px;
  letter-spacing: 0.01em;
  font-family: Neue Haas Unica W1G, sans-serif;
  height: 32px;
  color: white;
  font-size: 12px;
  font-weight: 700;
  background: rgba(16, 185, 130, 0.9);
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  padding: 8px;

  svg {
    margin-right: 5px;
  }
`;

const transitionTime = 0.25;
const IconSlotWrapper = styled.div`
  position: relative;
  cursor: pointer;
  width: 76px;
  height: 76px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  background: transparent;
  border: 2px solid transparent;
  transition: background ${transitionTime}s, border ${transitionTime}s;

  > svg {
    width: 24px;
    height: 24px;
  }

  &:hover {
    background: #FEFBEA;
    border: 2px solid #FDE689;
    transition: background ${transitionTime}s, border ${transitionTime}s;

    ${CopyWrapper} {
      display: flex;
    }
  }
`;

type Props = {
  icon: ElementType;
  onClick: () => void;
}

export const IconSlot = ({ icon: Icon, onClick }: Props) => (
  <IconSlotWrapper onClick={onClick}>
    <CopyWrapper role="tooltip">
      <ClipboardIcon size={18} />
      Copy SVG
    </CopyWrapper>
    <Icon />
  </IconSlotWrapper>
);
