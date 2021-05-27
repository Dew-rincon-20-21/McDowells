
import Home from "./screens/Home";
import {
  Container,
  CssBaseline,
  Paper,
  ThemeProvider,
  createMuiTheme,
} from '@material-ui/core';
import { BrowserRouter, Route } from "react-router-dom";
import Order from "./screens/Order";

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
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth="sm">
          <Paper>
            <Route path="/" component={Home} exact={true}></Route>
            <Route path="/order" component={Order} exact={true}></Route>

          </Paper>
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
