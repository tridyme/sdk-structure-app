import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import {
  Input,
  InputLabel,
  InputAdornment,
  FormControl,
} from '@material-ui/core';
import ToolTips from '../ToolTips';
import './InputElem.css';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: '25ch',
  },
  input: {
    color: 'blue',
    // backgroundColor: 'lightblue'
  },
  inputAdornment: {
    paddingRight: '1em',
    color: 'black'
  }
}));

const InputElem = ({
  data,
  updateValue
}) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <FormControl
        className={clsx(classes.margin, classes.withoutLabel, classes.textField)}
        // variant="outlined"
      >
        <InputLabel htmlFor="outlined-adornment-amount">{data.description}</InputLabel>
        <Input
          className={classes.input}
          value={data.value}
          startAdornment={
          <InputAdornment
            position="start"
            className={classes.inputAdornment}
          >
            {data.text}
            <ToolTips
              description={data.description}
              target={data.text}
            />
          </InputAdornment>}
          endAdornment={<InputAdornment position="end">{data.unit}</InputAdornment>}
          onChange={(e) => {
            const val = Number(e.target.value);
            updateValue('inputs', data.name, val);
          }}
        />
      </FormControl>
    </div>
  );
};

export default InputElem;
