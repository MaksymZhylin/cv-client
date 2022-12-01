import React from 'react';
import {
  AppBar,
  Container,
  Grid,
  Typography,
  Toolbar,
  Box,
} from '@material-ui/core';

import resumeData from '../../utils/resumeData';
import './Home.css';

const Home = () => {
  return (
    <AppBar position='static' className='content'>
      <Container maxWidth='xl' className='content_position'>
        <Toolbar disableGutters>
          <Box>
            <Grid container className='section'>
              <Grid item className='section_title'>
                <span></span>
                <Typography variant='body2' className='section_title_text'>
                  About me
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography className='aboutMe_text'>
                  {resumeData.about}
                </Typography>
                <Typography className='aboutMe_text'>
                  {resumeData.aboutPre}
                </Typography>
                <Typography className='aboutMe_text'>
                  {resumeData.hobby}
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Home;
