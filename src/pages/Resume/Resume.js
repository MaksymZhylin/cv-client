import React from 'react';
import {
  AppBar,
  Container,
  Grid,
  Typography,
  Box,
  Icon,
  Paper,
} from '@material-ui/core';
import CustomTimeline, {
  CustomTimelineSeparator,
} from '../../components/Timeline/Timeline';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import resumeData from '../../utils/resumeData';
import { TimelineContent, TimelineItem, TimelineDot } from '@mui/lab';

import './Resume.scss';

const Resume = () => {
  return (
    <AppBar position='static' className='content'>
      <Container maxWidth='xl' className='content_position'>
        <Box>
          <Grid container className='section'>
            <Grid item className='section_title'>
              <span></span>
              <Typography variant='body2' className='section_title_text'>
                Resume
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <Grid container className='resume_timeline'>
                <Grid item sm={9} md={6}>
                  <CustomTimeline
                    title='Education Experience'
                    icon={<SchoolIcon />}
                  >
                    {resumeData.education.map((education) => (
                      <TimelineItem key=''>
                        <CustomTimelineSeparator />
                        <TimelineContent className='timeline_content'>
                          <Typography className='timeline_title'>
                            {education.title}
                          </Typography>
                          <Typography
                            variant='caption'
                            className='timeline_data'
                          >
                            {education.date}
                          </Typography>
                          <Typography className='timeline_description'>
                            {education.description}
                          </Typography>
                        </TimelineContent>
                      </TimelineItem>
                    ))}
                  </CustomTimeline>
                </Grid>

                <Grid item sm={9} md={6}>
                  <CustomTimeline title='Work Experience' icon={<WorkIcon />}>
                    {resumeData.experiens.map((experiens) => (
                      <TimelineItem key=''>
                        <CustomTimelineSeparator />
                        <TimelineContent className='timeline_content'>
                          <Typography className='timeline_title'>
                            {experiens.title}
                          </Typography>
                          <Typography
                            variant='caption'
                            className='timeline_data'
                          >
                            {experiens.date}
                          </Typography>
                          <Typography className='timeline_description'>
                            {experiens.description}
                          </Typography>
                        </TimelineContent>
                      </TimelineItem>
                    ))}
                  </CustomTimeline>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>

      <Container maxWidth='xl' className='content_position gray'>
        <Box>
          <Grid container className='section'>
            <Grid item className='section_title'>
              <span></span>
              <Typography variant='body2' className='section_title_text'>
                My Services
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <Grid container spacing={3} justify='space-around'>
                {resumeData.services.map((services) => (
                  <Grid key='' item xs={12} sm={4} md={3}>
                    <div className='service'>
                      <Icon className='service_icon'>{services.icon}</Icon>
                      <Typography className='services_title' variant='h6'>
                        {services.title}
                      </Typography>
                      <Typography
                        className='service_description'
                        variant='body2'
                      >
                        {services.description}
                      </Typography>
                    </div>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>

      <Container maxWidth='xl' className='content_position'>
        <Grid container spacing={3} justify='space-between' className='section'>
          {resumeData.skills.map((skill) => (
            <Grid item xs={12} sm={6} md={3} key=''>
              <Paper elevation={0} className='skill'>
                <Typography variant='h6' className='skill_title'>
                  {skill.title}
                </Typography>
                {skill.description.map((element) => (
                  <Typography
                    variant='body2'
                    className='skill_description'
                    key=''
                  >
                    <TimelineDot
                      variant={'outlined'}
                      className='timeline_dot'
                    />
                    {element}
                  </Typography>
                ))}
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </AppBar>
  );
};

export default Resume;
