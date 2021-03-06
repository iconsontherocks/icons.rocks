import styled, { css } from 'styled-components';
import { darken } from 'polished';

import { loadColorFromTheme } from '../utils';
import { CardProps } from './card.types';

const foldCSS = css<CardProps>`
  clip-path: polygon(100% 0%, 0% 0%, 0% 100%, calc(100% - ${(props) => props.foldSize}) 100%, 100% calc(100% - ${(props) => props.foldSize}));
  &:after {
    content: '';
    position: absolute;
    right: 0; bottom: 0; 
    width: ${(props) => props.foldSize};
    height: ${(props) => props.foldSize};
    background: ${(props) => darken(0.2, loadColorFromTheme(props.color))};
  }
`;

export const CardWrapper = styled.div<CardProps>`
    position: relative;
    width: 100%;
    background: ${(props) => loadColorFromTheme(props.color)};
    ${(props) => props.fold && foldCSS};
`;
