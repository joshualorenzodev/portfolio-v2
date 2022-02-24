import { ThemeProvider } from "styled-components";
import Navbar from "./components/layout/Navbar";
import { Hero } from "./components/sections/hero/Hero";
import { GlobalStyles } from "./components/styles/Globals.styled";
import { Theme } from "./theme/default";

const App = () => {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <GlobalStyles />
        <Navbar />
        <Hero />
      </ThemeProvider>
    </>
  );
};

export default App;
