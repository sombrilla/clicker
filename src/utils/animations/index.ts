import {blockEnter} from './blockEnter';

export type AnimationNames = 'blockEnter';

export type Animations = Record<AnimationNames, (element: any, direction?: number) => void>;

export const animations: Animations = {
    blockEnter,
}