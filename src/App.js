import { createTheme, ThemeProvider } from "@mui/material";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0071BC",
    },
    secondary: {
      main: "#F7931E",
    },
  },
});
function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Home />
        {/* <Register /> */}
        {/* <Login /> */}
      </ThemeProvider>
    </>
  );
}

export default App;
