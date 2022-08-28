import React, { Component, useState } from 'react';
import Helmet from 'react-helmet';
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
import {
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText
} from '@material-ui/core';
import Icon from './Icon.svg';
import Logo from './Logo.png';
import SectionAnalysis from './Views/SectionAnalysis/SectionAnalysis';

const Menu = {
  MenuNavBar: [
    { text: "", link: "", href: "", icon: "" }
  ],
  MenuSideBarSup: [
    { text: "Home", link: "/home", href: "", icon: "dashboard" },
  ],
  MenuSideBarInf: [
    // { text: "Documentation", link: "", href: "https://www.tridyme.com/fr/documentation/fr/developpers/tridyme-webapp-kit-serverless", icon: "chrome_reader_mode" },
    { text: "GitHub", link: "", href: "https://github.com/tridyme/sdk-structure-app", icon: "code" }
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
      <Helmet>
        <title>{`TriDyme | Applications`}</title>
        <link rel="icon" type="image/png" href={Logo} sizes="16x16" />
      </Helmet>
      <Router history={history}>
        <AppContainerElem
          title={<ListItem>
            <ListItemAvatar>
              <Avatar
                alt={`Section Geometry`}
                src={Icon}
              />
            </ListItemAvatar>
            <ListItemText primary={`Section Geometry`} />
          </ListItem>}
          menu={Menu}
        >
          <Switch>
            <Route exact path="/" component={SectionAnalysis} />
            <Route exact path="/webkit" component={SectionAnalysis} />
            <Route exact path="/home" component={SectionAnalysis} />
          </Switch>
        </AppContainerElem>
      </Router>
    </ThemeProvider>
  );
};

export default App;
