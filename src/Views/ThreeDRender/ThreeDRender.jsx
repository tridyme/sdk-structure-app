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
import Box from '../../Components/ThreeDElem/Components/Elements/Box';

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



const ThreeDRender = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
          <CardElem
            title="My 3D Scene"
            subtitle="Structure"
          >
            <ThreeDElem
              Children={
                <React.Fragment>
                  <Box position={[-1.2, 0, 0]} />
                </React.Fragment>
              }
            />
          </CardElem>
        </Grid>
      </Grid>
  </div>
  );
}

export default ThreeDRender;
