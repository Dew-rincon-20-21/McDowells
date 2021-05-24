
import Home from "./screens/Home";
import {
  Container,
  CssBaseline,
  Paper,
  ThemeProvider,
  createMuiTheme,
} from '@material-ui/core';

const theme = createMuiTheme({
  typography: {
    h1: { fontWeight: "bold" },
    h2: {
      fontSize: "2rem",
      color: "black",
    },
    h3: {
      fontSize: "1.8rem",
      fontWeight: "bold",
      color: "white",
    }
  },
  palette: {
    primary: {
      main: "#ff1744",
    },
    secondary: {
      main: "#118e16",
      contrastText: "#ffffff",

    },
  }
})
function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="sm">
        <Paper>
          <Home>

          </Home>
        </Paper>
      </Container>
    </ThemeProvider>
  );
}

export default App;
