import React from 'react';
import { GitHub, Telegram, WebOutlined } from '@material-ui/icons';
import BrushIcon from '@mui/icons-material/Brush';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';

export default {
  name: 'Maksym Zhylin',
  firstName: 'Maksym',
  lastName: 'Zhylin',
  title: 'Frontend developer',

  born: '5th April 1998',
  email: 'maksim245342@gmail.com',
  address: 'Ukraine, Vinnytsia',
  phone: '+380671854189',

  socials: [
    {
      title: 'GitHub',
      link: 'https://github.com/MaksymZhylin',
      text: 'My GitHub',
      icon: <GitHub />,
    },
    {
      title: 'Telegram',
      link: 'https://t.me/MaksTarzan',
      text: 'My Telegram',
      icon: <Telegram />,
    },
  ],

  about:
    'Extremely motivated to constantly develop my skills and grow professionally. I am confident in my ability to come up with interesting ideas for unforgettable IT campaigns. I like to work in a team. I quickly find a common language.',

  aboutPre:
    "I was born in the industrial city of iron and smog, Mariupol. In 2015, he entered Vinnytsia National Technical University. In 2020, he finished his master's degree.",

  hobby:
    'I have a lot of hobbies. I like to watch and analyze movies, read historical books and fantasy. I love to cook as much as I love to eat :) I also have a lot of plants and take care of them. Likes almost any music (except rusian). I have a lot of board games, so I will be happy to invite you to play ;)',

  experiens: [
    {
      title: 'Freelance',
      date: '2020-2021',
      description:
        'Did small tasks on Upwork and also helped friends with their projects.',
    },
  ],

  education: [
    {
      title: 'University',
      date: '2015-2020',
      description:
        "Graduated from Vinnytsia National Technical University for a master's degree.",
    },
    {
      title: 'Courses',
      date: '2018-2021',
      description: 'Passed web, JS and React&Redux courses',
    },
  ],

  services: [
    {
      title: 'Web Development',
      description: 'Website development is up to me!',
      icon: <WebOutlined />,
    },
    {
      title: 'Photoshop',
      description: 'I can do anything.',
      icon: <InsertPhotoIcon />,
    },
    {
      title: 'Illustrator',
      description: 'I can make logos or any illustrations with animation.',
      icon: <BrushIcon />,
    },
  ],

  skills: [
    {
      title: 'FRONT-END',
      description: [
        'JavaScript',
        'ReactJS',
        'Redux',
        'Boodstrap',
        'Material UI',
        'HTML5 / CSS3',
        'Preprocessors',
      ],
    },
    {
      title: 'BACK-END',
      description: ['Node JS', 'PHP'],
    },
    {
      title: 'DATABASE',
      description: ['MySQL', 'MongoDB'],
    },
    {
      title: 'SOURCE CONTROL',
      description: ['Git'],
    },
  ],
};
