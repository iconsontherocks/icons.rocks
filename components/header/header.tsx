import React from 'react';
import * as S from './header.styles';

interface Props {
    title: string
    subtitle?: string
    components?: {
        subtitle?: React.ElementType
    }
}

export const Header = ({ title, subtitle, components }: Props) => (
  <S.HeaderWrapper>
    { components.subtitle || <S.HeaderSubTitle>{ subtitle }</S.HeaderSubTitle>}
    <S.HeaderTitle>{title}</S.HeaderTitle>
  </S.HeaderWrapper>
);

Header.defaultProps = {
  subtitle: null,
  components: {
    subtitle: null,
  },
};
