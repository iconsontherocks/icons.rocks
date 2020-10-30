import React from 'react';

import {
  getIcons, getIconsPathFromFamily, IconFamily,
} from '../../modules/icons';

import { Family } from '../../modules';

export async function getStaticProps(it) {
  const data = getIconsPathFromFamily(it.params.slug);
  return {
    props: data,
  };
}

export async function getStaticPaths() {
  const icons = getIcons();

  return {
    paths: icons.map((it) => ({ params: { slug: it.path } })),
    fallback: false,
  };
}

export default function FamilyPage(props: IconFamily) {
  return <Family family={props} />;
}
