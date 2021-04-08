import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import InputElem from '../../../Components/InputElem';
import TableElem from '../../../Components/TableElem';
import CardElem from '../../../Components/CardElem';

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
  values,
  handleChangeValues
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
            <InputElem
              value={values.A}
              text={'A'}
              description={'Section:'}
              unit={'m2'}
              onChange={handleChangeValues('b')}
            />
            <InputElem
              value={values.Ixx}
              text={'Ixx'}
              description={'Inertie:'}
              unit={'m4'}
              onChange={handleChangeValues('Ixx')}
            />
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
                    { x: 0, y: 0 },
                    { x: values.b, y: 0 },
                    { x: values.b, y: values.h },
                    { x: 0, y: values.h },
                    { x: 0, y: 0 }
                  ],
                  unit: { x: 'm', y: 'm' }
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
