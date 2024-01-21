import React, { PropsWithChildren } from "react";
import { MainContainer } from "./main-layout.styled";
import Header from "components/header/header";

const MainLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <MainContainer>
      <Header />
      {children}
    </MainContainer>
  );
};

export default MainLayout;
