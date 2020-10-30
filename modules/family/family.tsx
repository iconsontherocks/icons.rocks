import React from 'react';
import { IconFamily, IconsMenu } from '../icons';

type Props = {
  family: IconFamily
}
export const Family = ({ family }: Props) => (
  <>
    <IconsMenu currentFamily={family.path} />
    <h1>{ family.name }</h1>
  </>
);
