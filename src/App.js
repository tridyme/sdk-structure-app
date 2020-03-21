import React, { Component } from 'react';
import {
  Router,
  Switch,
  Route
} from 'react-router-dom';
import './App.css';
import history from './history';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import AppContainerElem from './Components/AppContainerElem';

import MyApp from './Views/MyApp/';
import Page1 from './Views/Page1/';

const Menu = {
  MenuNavBar: [
    { text: "", link: "", icon: "" }
  ],
  MenuSideBarSup: [
    { text: "Home", link: "/home", icon: "dashboard" },
  ],
  MenuSideBarInf: [
    { text: "Page 1", link: "/page1", icon: "spam" }
  ]
};

const App = () => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? 'dark' : 'light',
          primary: {
            // light: will be calculated from palette.primary.main,
            main: '#000000',
            // dark: will be calculated from palette.primary.main,
            // contrastText: will be calculated to contrast with palette.primary.main
          },
          secondary: {
            //light: '#0066ff',
            main: '#ff0000',
            // dark: will be calculated from palette.secondary.main,
            //contrastText: '#ffcc00',
          },
        },
      }),
    [prefersDarkMode],
  );
  
  
  return (
    <ThemeProvider theme={theme}>
      <Router history={history}>
        <AppContainerElem
          title="My App"
          menu={Menu}
        >
          <Switch>
            <Route path="/home" component={MyApp} />
            <Route path="/page1" component={Page1} />
          </Switch>
        </AppContainerElem>
      </Router>
    </ThemeProvider>
  );
};

export default App;
