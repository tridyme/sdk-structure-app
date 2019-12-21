import React, { useState } from 'react';
import { Tooltip, InputGroupText } from 'reactstrap';
import PropTypes from 'prop-types';
import { FaInfoCircle } from 'react-icons/fa/';
import './ToolTips.css';

const ToolTips = (props) => {
  const [status, setStatus] = useState(false);
  return (
    <div className="tooltips">
      <div className="groupInfo" id={props.target}>
        <FaInfoCircle className="icon" />
      </div>
      <Tooltip placement="top" isOpen={status} target={props.target} toggle={() => setStatus(!status)}>
        {props.description}
      </Tooltip>
    </div>
  );
}

export default ToolTips;