import { ThemeProvider } from "styled-components";
import Navbar from "./components/layout/Navbar";
import { GlobalStyles } from "./components/styles/Globals.styled";
import { Theme } from "./theme/default";

const App = () => {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <GlobalStyles />
        <Navbar />
      </ThemeProvider>
    </>
  );
};

export default App;
