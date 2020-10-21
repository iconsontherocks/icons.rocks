import { icons } from '../../metadata.json';
import { IconFamily } from './home.types';

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]; //eslint-disable-line
  }
  return a;
}

/*
* TODO: Refactor this
* It's only necessary because we don't wanna to implement a backend in our MVP.
* We need to refactor this after to our react lib solution, like this:
* <Icon family="feather" name="test" />
*/
export const getIcons = (): Array<IconFamily> => {
  // @ts-ignore
  const allIcons = require.context('../../assets/').keys();
  const grouppedIcons = allIcons.reduce((acc, it) => {
    const [, folderName] = it.split('/');
    const item = acc[folderName] || [];

    return {
      ...acc,
      [folderName]: [...item, it.substring(2)],
    };
  }, {});

  return icons.map((it) => ({
    ...it,
    totalIcons: grouppedIcons[it.path].length,
    icons: shuffle(grouppedIcons[it.path]).slice(0, 12)
      .map((path) => require(`../../assets/${path}`).default), //eslint-disable-line
  }));
};
