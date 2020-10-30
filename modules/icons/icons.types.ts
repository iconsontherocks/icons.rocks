import { ElementType } from 'react';

export interface IconFamily {
  name: string
  author: string
  version: string
  license: string
  stars: string
  site: string
  path: string
  icons: Array<ElementType> | Array<string>
  totalIcons: number
}
