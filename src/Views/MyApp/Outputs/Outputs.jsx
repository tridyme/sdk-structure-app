import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import OutputElem from '../../../Components/OutputElem';
import TableElem from '../../../Components/TableElem';
import CardElem from '../../../Components/CardElem';
import calculationFunctions from '../Calculations/calculations';

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

const Outputs = ({
  inputsData,
  outputsData
}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <CardElem
            title="My Outputs"
            subtitle="Section characteristics"
          >
            <div>
              <OutputElem 
                data={outputsData.A}
                inputsData={inputsData}
                calculationFunctions={calculationFunctions.surfaceRectangle}
              />
              <OutputElem 
                data={outputsData.Ixx}
                inputsData={inputsData}
                calculationFunctions={calculationFunctions.inertiaXX}
              />
            </div>
          </CardElem>
        </Grid>
        <Grid item xs={12} sm={6}>
          <CardElem
            title="My Table"
            subtitle="Section coordinates"
          >
            <div>
              <TableElem
                data={{
                  columns: [
                    'x(m)',
                    'y(m)'
                  ],
                  rows: [
                    {x: 0, y: 0},
                    {x: inputsData.b.value, y: 0},
                    {x: inputsData.b.value, y: inputsData.h.value},
                    {x: 0, y: inputsData.h.value},
                    {x: 0, y: 0}
                  ],
                  unit: {x: 'm', y: 'm'}
                }}
              />
            </div>
          </CardElem>
        </Grid>
      </Grid>
    </div>
  )
}

export default Outputs;
