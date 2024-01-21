import { Dispatch, SetStateAction } from "react";

export enum TypeTheme {
  dark = "dark",
  light = "light",
}

export interface ThemeContextInterface {
  themeName: TypeTheme;
  setThemeName: Dispatch<SetStateAction<TypeTheme>>;
}
