import React, { useRef, useState } from 'react';
import {
  AppBar,
  Grid,
  BottomNavigation,
  BottomNavigationAction,
  Tabs,
  Typography
} from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import CardElem from '../../Components/CardElem';
import ThreeDElem from '../../Components/ThreeDElem';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));



const Page1 = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
          <CardElem
            title="My Inputs"
            subtitle="Section dimensions"
          >
            <ThreeDElem />
          </CardElem>
        </Grid>
      </Grid>
  </div>
  );
}

export default Page1;
