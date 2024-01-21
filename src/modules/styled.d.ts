import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    backgroundColor: string;
    colors: {
      textColor: string;
      primary: string;
      border: string;
    };
    header: {
      backgroundColor: string;
      textColor: string;
    };
  }
}
