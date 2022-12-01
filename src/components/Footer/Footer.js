import React from 'react';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';

import './Footer.scss';
import resumeDate from '../../utils/resumeData';

const Footer = () => {
  return (
    <AppBar position='static' className='footer'>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant='subtitle1'>Maksym Zhylin</Typography>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Typography variant='subtitle1'>
              {resumeDate.socials.map((item) => (
                <a key='' href={item.link} className='link_icon'>
                  {item.icon}
                </a>
              ))}
            </Typography>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Footer;
