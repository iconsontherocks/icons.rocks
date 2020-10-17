import React from 'react';
import { Button } from '../button/button';
import { Logo } from '../icons';
import { Input } from '../input/input';

import * as S from './footer.styles';

export const Footer = () => (
  <S.FooterWrapper>
    <S.FooterContainer>
      <S.FooterSection>
        <S.SectionTitle>About</S.SectionTitle>
        <S.SectionText>
          The in-between stage of being young yet no longer so young is a
          complex phase to say the least.
          It is a time for more realities and less fantasies.
          A time of accomplishments and epic failures.
          A time of slowly marinated self-acceptance and self-discovery.
        </S.SectionText>
        <S.SectionBottom>
          © 2020 Icons on the Rocks, Inc. All rights reserved.
        </S.SectionBottom>
      </S.FooterSection>
      <S.FooterSection>
        <S.SectionTitle>Newsletter</S.SectionTitle>
        <S.SectionText>Get updates about new icons right on your inbox:</S.SectionText>
        <S.Newsletter>
          <Input />
          <Button>
            Sign up
          </Button>
        </S.Newsletter>
        <S.SectionBottom alignRight>
          <Logo />
        </S.SectionBottom>
      </S.FooterSection>
    </S.FooterContainer>
  </S.FooterWrapper>
);
