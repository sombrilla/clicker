import {blockEnter} from './blockEnter';

export type Animations = Record<string, (element: any, direction?: number) => void>;

export const animations: Animations = {
    blockEnter,
}