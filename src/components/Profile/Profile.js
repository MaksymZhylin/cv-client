import React from 'react';
import { Typography } from '@material-ui/core';
import { GetApp, PersonOutlineOutlined } from '@material-ui/icons';
import { TimelineContent, TimelineItem } from '@mui/lab';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import CustomTimeline, { CustomTimelineSeparator } from '../Timeline/Timeline';
import resumeData from '../../utils/resumeData';
import CustomButton from '../Buttons/Buttons';

import 'react-lazy-load-image-component/src/effects/blur.css';
import './Profile.css';

const CustomTimelineItem = ({ title, text, link }) => {
  return (
    <TimelineItem>
      <CustomTimelineSeparator />
      <TimelineContent className='timeline_content'>
        {link ? (
          <Typography className='timelineItem_text'>
            <span>{title}</span>{' '}
            <a href={link} target='_blank' rel='noreferrer'>
              {text}
            </a>
          </Typography>
        ) : (
          <Typography className='timelineItem_text'>
            <span>{title}:</span>
            {text}
          </Typography>
        )}
      </TimelineContent>
    </TimelineItem>
  );
};

const Profile = () => {
  return (
    <div className='profile conteiner_shadow'>
      <div className='profile_name'>
        <Typography className='name'>{resumeData.name}</Typography>
        <Typography className='title'>{resumeData.title}</Typography>
      </div>

      <figure className='profile_image'>
        <LazyLoadImage
          src={require('../../assets/images/displayImage.jpg').default}
          alt=''
          effect='blur'
        />
      </figure>

      <div className='profile_information'>
        <CustomTimeline icon={<PersonOutlineOutlined />}>
          <CustomTimelineItem title='First Name' text={resumeData.firstName} />
          <CustomTimelineItem title='Last Name' text={resumeData.lastName} />
          <CustomTimelineItem title='Born' text={resumeData.born} />
          <CustomTimelineItem title='Title' text={resumeData.title} />

          {resumeData.socials.map((item) => (
            <CustomTimelineItem
              key=''
              title={item.title}
              text={item.text}
              link={item.link}
            />
          ))}
        </CustomTimeline>
        <br />
        <div className='button_container'>
          <CustomButton text={'Download CV'} icon={<GetApp></GetApp>} />
        </div>
      </div>
    </div>
  );
};

export default Profile;
