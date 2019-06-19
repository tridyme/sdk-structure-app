import React, { useState } from 'react';
import update from 'immutability-helper';
import { fromJS } from 'immutable';
import calculationFunctions from './Calculations/calculations';
import PropTypes from 'prop-types';
import {
  Col,
  Row,
  Container
} from 'reactstrap';
import './MyApp.css';
import Inputs from './Inputs';
import Outputs from './Outputs';

import initialData from './initialData';

function MyApp(props) {

  // Define result state object
  const [appData, setAppData] = useState(initialData);

  const updateValue = (field, name, value) => {
    const updateAppData = update(appData, {
      [field]: {
        [name]: {
          value: {
            $set: value
          }
        }
      }
    });
    setAppData(updateAppData);
  }

  return (
    <Container className="myapp-container">
      <Row>
        <Inputs 
          inputsData={appData.inputs}
          updateValue={updateValue}
        />
        <Outputs
          outputsData={appData.outputs}
          inputsData={appData.inputs}
          updateValue={updateValue}
        />
      </Row>
    </Container>
  );
}

MyApp.propTypes = {
    props: PropTypes.object
};


export default MyApp;
