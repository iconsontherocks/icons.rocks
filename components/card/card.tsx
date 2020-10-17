import React from 'react';

import { CardProps } from './card.types';
import * as S from './card.styles';

export const Card = ({
  children, fold = true, color = 'backgroundDarken2', className = '',
}: CardProps) => (
  <S.CardWrapper fold={fold} color={color} className={className}>
    { children }
  </S.CardWrapper>
);
