import React, {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { ThemeContextInterface, TypeTheme } from "types/theme";
import {
  DefaultTheme,
  ThemeProvider as StyledProvider,
} from "styled-components";
import { useLocalStorage } from "usehooks-ts";
import { darkTheme, lightTheme } from "themes";
import { GlobalStyle } from "styles/global.styled";

const ThemeContext = createContext<ThemeContextInterface>({
  themeName: TypeTheme.dark,
  setThemeName: (themeName) => {},
});

export const useThemeContext = () => useContext(ThemeContext);

const ThemeProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [themeName, setThemeName] = useLocalStorage("theme", TypeTheme.dark);
  const [theme, setTheme] = useState<DefaultTheme>(darkTheme);

  useEffect(() => {
    const newTheme = themeName === TypeTheme.dark ? darkTheme : lightTheme;
    setTheme(newTheme);
  }, [themeName]);

  return (
    <ThemeContext.Provider value={{ themeName, setThemeName }}>
      <StyledProvider theme={theme}>
        <GlobalStyle />
        {children}
      </StyledProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
