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
  Card,
  CardHeader,
  CardBody
} from 'reactstrap';
import ChartElem from '../../../Components/ChartElem';
import InputElem from '../../../Components/InputElem';

const Inputs = ({
  inputsData,
  updateValue
}) => {
  return (
    <Col md={6} className="">
      <Card>
        <CardHeader>My Inputs</CardHeader>
        <CardBody>
          <InputElem 
            data={inputsData.h}
            updateValue={updateValue}
          />
          <InputElem 
            data={inputsData.b}
            updateValue={updateValue}
          />
        </CardBody>
      </Card>
      <Card>
        <CardHeader>My Chart</CardHeader>
        <CardBody>
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
        </CardBody>
      </Card>
    </Col>
  )
}

export default Inputs;
