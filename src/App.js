import './App.css';
import React from 'react';
import Navbar from './components/Navbar/index'
import Grid from '@material-ui/core/Grid'
import Orders from './components/MainContainer/index';

const App = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={3} lg={3} >
        <Navbar />
      </Grid>
      <Grid item xs={9} >
        <Orders />
      </Grid>
    </Grid>
  )
}

export default App
