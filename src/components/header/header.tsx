import React, { useMemo } from "react";
import { Brand, Button, CenterRow, HeaderContainer } from "./header.styled";
import { useThemeContext } from "providers/theme";
import { TypeTheme } from "types/theme";
import { IoIosSunny, IoMdMoon } from "react-icons/io";

const Header: React.FC = () => {
  const { themeName, setThemeName } = useThemeContext();
  const componentProps = useMemo(() => {
    if (themeName === TypeTheme.dark) {
      return {
        src: "/dio-white.svg",
        toggle: TypeTheme.light,
        button: (
          <>
            LIGHT <IoIosSunny />
          </>
        ),
      };
    }

    return {
      src: "/dio-black.svg",
      toggle: TypeTheme.dark,
      button: (
        <>
          DARK <IoMdMoon />
        </>
      ),
    };
  }, [themeName]);

  return (
    <HeaderContainer>
      <CenterRow>
        <Brand src={componentProps.src} alt="dio" />
        <Button onClick={() => setThemeName(componentProps.toggle)}>
          {componentProps.button}
        </Button>
      </CenterRow>
    </HeaderContainer>
  );
};

export default Header;
