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
import ChartElem from '../../Components/ChartElem';
import InputElem from '../../Components/InputElem';
import { Scatter } from 'react-chartjs-2';
const Inputs = ({
  inputsData,
  updateValue
}) => {
  return (
    <Col md={6} className="">
      <h3>My Inputs :</h3>
      <h4>Rectangle</h4>
      <InputElem 
        data={inputsData.h}
        updateValue={updateValue}
      />
      <InputElem 
        data={inputsData.b}
        updateValue={updateValue}
      />
      <h3>My Chart :</h3>
      <ChartElem
        dataForChart={{
          chartTitle: 'Section Rectangulaire',
          value: [
            {x: 0, y: 0},
            {x: inputsData.b.value, y: 0},
            {x: inputsData.b.value, y: inputsData.h.value},
            {x: 0, y: inputsData.h.value},
            {x: 0, y: 0}
          ],
          axisName: {x: 'Largeur de la Section ', y: 'Hauteur de la section '},
          unit: {x: 'm', y: 'm'}
        }}
      />
    </Col>
  )
}

export default Inputs;
