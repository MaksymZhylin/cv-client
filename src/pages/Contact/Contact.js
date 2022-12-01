import React from 'react';
import { AppBar, Container, Grid, Typography, Box } from '@material-ui/core';

import Form from '../../components/Form/Form';
import ContInfo from '../../components/ConInfo/ContInfo';

const Contact = () => {
  return (
    <AppBar position='static' className='content'>
      <Container maxWidth='xl' className='content_position'>
        <Box>
          <Grid container className='section'>
            <Grid item xs={12}>
              <Grid container>
                <Grid item xs={9} sm={9} md={6}>
                  <Grid item className='section_title'>
                    <span></span>
                    <Typography variant='body2' className='section_title_text'>
                      Contact Information
                    </Typography>
                  </Grid>

                  <Grid item xs={12}>
                    <ContInfo />
                  </Grid>
                </Grid>

                <Grid item xs={9} sm={9} md={6} justifyContent='center'>
                  <Grid item className='section_title'>
                    <span></span>
                    <Typography variant='body2' className='section_title_text'>
                      Contact Form
                    </Typography>
                  </Grid>
                  <Typography variant='body2' className='section_text'>
                    You can leave your contact information for feedback.
                  </Typography>

                  <Grid item xs={12}>
                    <Form />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </AppBar>
  );
};

export default Contact;
