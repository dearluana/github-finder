import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Open Sans', sans-serif;
    box-sizing: border-box;
  }
  html {
    scroll-behavior: smooth;
    min-height: 100%;
    background: ${({theme}) => theme.backgroundColor};
  }
  body {
    overflow-x: hidden !important;
    font-size: 1rem;
    max-width: 100vw;
  }
  button, a {
    cursor: pointer;
    font-size: 1rem;
    border: none;
    outline: none;
    &:hover, &:focus {
      outline: none;
    }
  }
  a { 
    text-decoration: none;
  }
`;

export enum Breakpoints {
  phones = "576px",
  tablets = "768px",
  desktops = "992px",
  largeDesktops = "1200px",
  ultraLargeDesktops = "1440px",
}

export const _LP = {
  maxWidth: Breakpoints.ultraLargeDesktops,
  mediaQuery: `(min-width: ${Breakpoints.desktops})`,
  size: Breakpoints.desktops,
};
