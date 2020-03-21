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

const OutputElem = ({
  data,
  inputsData,
  calculationFunctions,
  updateValue
}) => {
  const classes = useStyles();
  const outputValue = calculationFunctions(inputsData);
  return (
    <div className={classes.root}>
      <FormControl
        className={clsx(classes.margin, classes.withoutLabel, classes.textField)}
        // variant="outlined"
      >
        <InputLabel htmlFor="outlined-adornment-amount">{data.description}</InputLabel>
        <Input
          className={classes.input}
          name={data.name}
          placeholder={data.name}
          value={outputValue}
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
        />
      </FormControl>
    </div>
  );
};

// const OutputElem1 = ({
//   data,
//   inputsData,
//   calculationFunctions,
//   updateValue
// }) => {
//   const outputValue = calculationFunctions(inputsData);
//   return (
//     <InputGroup className="outputElem">
//       <InputGroupAddon className="groupAddon" addonType="prepend">
//         <InputGroupText className="groupText">{data.text}</InputGroupText>
//       </InputGroupAddon>
//       <InputGroupAddon className="groupAddon" addonType="prepend">
//         <ToolTips
//           description={data.description}
//           target={data.text}
//         />
//       </InputGroupAddon>
//       <Input
//         className="inputValue"
//         type="number"
//         name={data.name}
//         placeholder={data.name}
//         value={outputValue}
//       />
//       <InputGroupAddon addonType="append">
//         <Input
//           className="inputUnit"
//           type="text"
//           value={data.unit}
//           disabled
//         />
//       </InputGroupAddon>
//     </InputGroup>
//   );
// };

export default OutputElem;
