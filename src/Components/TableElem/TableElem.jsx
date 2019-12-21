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
	Table,
  Button
} from 'reactstrap';

const TableElem = ({
  data
}) => {
  return (
    <div>
      <Table responsive>
				<thead>
					{data.columns.map((column, index) =>(
						<td key={index}>{column}</td>
					))}
				</thead>
				<tbody>
					{data.rows.map((row, index) =>(
						<tr key={index}>
							{Object.keys(row).map((item, i) => (
								<td key={i}>{`${row[item]}`}</td>
							))}
						</tr>
					))}
				</tbody>
      </Table>
    </div>
  );
}

export default TableElem;