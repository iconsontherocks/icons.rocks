import { ElementType, ReactElement } from 'react';
import { ThemeColors } from '../../theme';

export interface CardProps {
    color?: ThemeColors
    fold?: boolean
    children?: ElementType | ReactElement[] | string
    className?: string
}
