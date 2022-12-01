import React from 'react';
import { Typography } from '@material-ui/core';
import resumeData from '../../utils/resumeData';

import './ConInfo.css';

const ContInfo = () => {
  return (
    <>
      <Typography className='info'>
        <span>Address:</span>
        <p>{resumeData.address}</p>
      </Typography>
      <Typography className='info'>
        <span>Email:</span>
        <p>{resumeData.email}</p>
      </Typography>
      <Typography className='info'>
        <span>Phone:</span>
        <p>{resumeData.phone}</p>
      </Typography>
    </>
  );
};

export default ContInfo;
