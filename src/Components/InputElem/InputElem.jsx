import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Col,
  Row,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Button,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
} from 'reactstrap';
import ToolTips from '../ToolTips';
import './InputElem.css';

const InputElem = ({
  data,
  updateValue
}) => {
  // const [dataValue, setDataValue] = useState(data.value);

  return (
    <InputGroup className="inputElem">
      <InputGroupAddon className="groupAddon" addonType="prepend">
        <InputGroupText className="groupText">{data.text}</InputGroupText>
      </InputGroupAddon>
      <InputGroupAddon className="groupAddon" addonType="prepend">
        <ToolTips
          description={data.description}
          target={data.text}
        />
      </InputGroupAddon>
      <Input
        className="inputValue"
        type="number"
        name={data.name}
        onChange={(e) => {
          const val = Number(e.target.value);
          updateValue('inputs', data.name, val);
        }}
        placeholder={data.text}
        value={data.value}
      />
      <InputGroupAddon addonType="append">
        <Input
          className="inputUnit"
          type="text"
          value={data.unit}
          disabled
        />
      </InputGroupAddon>
    </InputGroup>
  )
};

export default InputElem;
