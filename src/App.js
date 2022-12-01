import React from 'react';
import { Container, Grid } from '@material-ui/core';

import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Resume from './pages/Resume/Resume';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

const App = () => {
  return (
    <Container className='top'>
      <Grid container>
        <Grid item xs={12} sm={9} md={4} lg={3}>
          <Profile />
        </Grid>
        <Grid item xs sm={9} md={8}>
          <Router>
            <Header />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/resume' component={Resume} />
              <Route path='/contact' component={Contact} />
            </Switch>
          </Router>
          <Footer />
        </Grid>
      </Grid>
    </Container>
  );
};

export default App;
