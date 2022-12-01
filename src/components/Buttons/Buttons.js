import React, { useContext } from 'react';
import { Button } from '@material-ui/core';

import './Buttons.css';
import { AppContext } from '../../AppContext';

const CustomButtons = ({ text, icon }) => {
  const { getFile, file } = useContext(AppContext);
  return (
    <>
      {getFile()}
      {file.map((val, key) => (
        <a key={''} href={val.url}>
          <Button
            className='custom_btn'
            endIcon={icon && <div className='btn_icon_container'>{icon}</div>}
          >
            <span className='btn_text'>{text}</span>
          </Button>
        </a>
      ))}
    </>
  );
};

export default CustomButtons;
