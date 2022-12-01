import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';

import './Header.css';

const pages = [
  { id: 1, title: 'Resume', url: '/resume' },
  { id: 3, title: 'Contact', url: '/contact' },
];

const Header = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position='static' className='header'>
      <Container maxWidth='xl'>
        <Toolbar disableGutters className='toolbar_menu_corrections'>
          <Box
            variant='h6'
            noWrap
            component='div'
            sx={{ mr: 0, color: 'black', display: { xs: 'none', md: 'flex' } }}
          >
            <Link to='/' className='link'>
              <HomeIcon className='header_home_icon' />
            </Link>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page.id}
                sx={{ my: 0, color: 'black', display: 'block' }}
                className='menu_button'
                component={Link}
                to={page.url}
              >
                {page.title}
              </Button>
            ))}
          </Box>

          {/*------------------mobile------------------*/}
          <Typography
            variant='h6'
            noWrap
            component='div'
            sx={{
              flexGrow: 1,
              color: 'black',
              display: { xs: 'flex', md: 'none' },
            }}
          >
            <Link to='/' className='link'>
              <HomeIcon className='header_home_icon' />
            </Link>
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              color: 'black',
              display: { xs: 'flex', md: 'none' },
            }}
            className='box_menu_corrections'
          >
            <IconButton
              size='large'
              aria-label='account of current user'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleOpenNavMenu}
              color='inherit'
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id='menu-appbar'
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.id} onClick={handleCloseNavMenu}>
                  <Typography textAlign='center'>
                    <Link to={page.url} className='link'>
                      {page.title}
                    </Link>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/*------------------end mobile------------------*/}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
