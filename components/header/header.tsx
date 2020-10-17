import React from 'react';
import { Container } from '../layout';
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
    <Container>
      { components.subtitle || <S.HeaderSubTitle>{ subtitle }</S.HeaderSubTitle>}
      <S.HeaderTitle>{title}</S.HeaderTitle>
    </Container>
  </S.HeaderWrapper>
);

Header.defaultProps = {
  subtitle: null,
  components: {
    subtitle: null,
  },
};
