import React from 'react';

import { CardProps } from './card.types';
import * as S from './card.styles';

export const Card = ({
  children,
  fold = true,
  color = 'backgroundDarken2',
  className = '',
  tag = 'div',
  foldSize = '6%',
  ...props
}: CardProps) => (
  <S.CardWrapper
    foldSize={foldSize}
    fold={fold}
    color={color}
    className={className}
    as={tag}
    {...props}
  >
    { children }
  </S.CardWrapper>
);
