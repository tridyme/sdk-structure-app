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
import { Scatter } from 'react-chartjs-2';
import chartData from './utils/chartData';
import chartOptions from './utils/chartOptions';

const ChartElem = ({
  dataForChart
}) => {
  return (
    <div>
      <Scatter
        className="chart"
        width={200}
        height={200}
        data={chartData(dataForChart)}
        options={chartOptions(dataForChart)}
      />
    </div>
  );
}

export default ChartElem;