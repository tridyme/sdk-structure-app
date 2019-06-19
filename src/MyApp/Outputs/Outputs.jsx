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
  Button
} from 'reactstrap';
import OutputElem from '../../Components/OutputElem';
import calculationFunctions from '../Calculations/calculations';

const Outputs = ({
  inputsData,
  outputsData
}) => {
  return (
    <Col md={6} className="result">
      <h3>Outputs :</h3>
      <h4>Surface Rectangle :</h4>
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
    </Col>
  )
}

export default Outputs;
