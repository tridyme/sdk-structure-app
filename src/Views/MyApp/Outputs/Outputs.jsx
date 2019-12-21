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
import OutputElem from '../../../Components/OutputElem';
import TableElem from '../../../Components/TableElem';
import calculationFunctions from '../Calculations/calculations';

const Outputs = ({
  inputsData,
  outputsData
}) => {
  return (
    <Col md={6} className="result">
      <Card>
        <CardHeader>
          My Outputs
        </CardHeader>
        <CardBody>
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
        </CardBody>
      </Card>
      <Card>
        <CardHeader>My Table</CardHeader>
        <CardBody>
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
        </CardBody>
      </Card>
    </Col>
  )
}

export default Outputs;
