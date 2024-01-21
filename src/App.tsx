import Home from "pages/home";
import ThemeProvider from "providers/theme";
import React from "react";
import "normalize.css";

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Home />
    </ThemeProvider>
  );
};

export default App;
