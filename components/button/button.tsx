import React from 'react';

import * as S from './button.styles';

export const Button = ({ children }: { children: string | React.ElementType}) => (
  <S.ButtonWrapper color="primary" tag="button" foldSize="15px">
    {children}
  </S.ButtonWrapper>
);
