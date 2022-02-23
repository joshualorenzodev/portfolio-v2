import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/styles/Globals.styled";
import { Theme } from "./theme/default";

const App = () => {
  // const theme = {
  //   fonts: {
  //     primaryFont: "Share Tech Mono, monospace",
  //     secondaryFont: "Poppins, sans-serif",
  //   },
  //   colors: {
  //     white: "rgba(240, 247, 255, 1)",
  //     navyBlue: "rgba(2, 12, 27, 1)",
  //     lightNavyBSlue: "rgba(4, 22, 48, 1)",
  //     green: "rgba(0, 206, 158, 1)",
  //     orange: "rgba(249, 105, 14, 1)",
  //     purple: "rgba(102, 51, 153, 1)",
  //   },
  //   breakpoints: {
  //     sm: "screen and (max-width: 640px)",
  //     md: "screen and (max-width: 768px)",
  //     lg: "screen and (max-width: 1024px)",
  //     xl: "screen and (max-width: 1280px)",
  //   },
  // };

  return (
    <>
      <ThemeProvider theme={Theme}>
        <GlobalStyles />
        App
        <hr />
      </ThemeProvider>
    </>
  );
};

export default App;
