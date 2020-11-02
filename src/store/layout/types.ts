
export type ThemeColors = 'light' | 'dark'

export enum LayoutActionTypes {
  SET_THEME = '@@layout/SET_THEME'
}


// https://github.com/piotrwitek/react-redux-typescript-guide#state-with-type-level-immutability
export interface LayoutState {
  readonly theme: ThemeColors
}
