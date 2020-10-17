import { Theme, ThemeColors } from '../../theme';

export const loadColorFromTheme = (property: ThemeColors) => Theme.colors[property];
