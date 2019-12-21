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
import './OutputElem.css';

const OutputElem = ({
  data,
  inputsData,
  calculationFunctions,
  updateValue
}) => {
  const outputValue = calculationFunctions(inputsData);
  return (
    <InputGroup className="outputElem">
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
        placeholder={data.name}
        value={outputValue}
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
  );
};

export default OutputElem;
