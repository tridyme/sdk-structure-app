import React, { useState } from 'react';
import update from 'immutability-helper';
import { fromJS } from 'immutable';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import {
  AppBar,
  BottomNavigation,
  BottomNavigationAction,
  Tabs,
  Box,
  Typography
} from '@material-ui/core';

import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Inputs from './Inputs';
import Outputs from './Outputs';

import initialData from './initialData';

const useStyles = makeStyles(theme => ({
  text: {
    padding: theme.spacing(2, 2, 0),
  },
  paper: {
    paddingBottom: 50,
  },
  list: {
    marginBottom: theme.spacing(2),
  },
  subheader: {
    backgroundColor: theme.palette.background.paper,
  },
  appBar: {
    top: 'auto',
    bottom: 0,
  },
  grow: {
    flexGrow: 1,
  },
  fabButton: {
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto',
  },
}));

function MyApp(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  // Define result state object
  const [appData, setAppData] = useState(initialData);

  const updateValue = (field, name, value) => {
    const updateAppData = update(appData, {
      [field]: {
        [name]: {
          value: {
            $set: value
          }
        }
      }
    });
    setAppData(updateAppData);
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = index => {
    setValue(index);
  };

  return (
    <div>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <Inputs 
            inputsData={appData.inputs}
            updateValue={updateValue}
          />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <Outputs
            outputsData={appData.outputs}
            inputsData={appData.inputs}
            updateValue={updateValue}
          />
        </TabPanel>
      </SwipeableViews>
     
      <AppBar position="fixed" color="primary" className={classes.appBar}>
        <BottomNavigation
          value={value}
          onChange={handleChange}
          variant="fullWidth"
          showLabels
        >
          <BottomNavigationAction label="Inputs"  {...a11yProps(0)} icon={<RestoreIcon />} />
          <BottomNavigationAction label="Outputs" {...a11yProps(1)} icon={<FavoriteIcon />} />
        </BottomNavigation>
      </AppBar>
    </div>
  );
}

MyApp.propTypes = {
    props: PropTypes.object
};

export default MyApp;

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}