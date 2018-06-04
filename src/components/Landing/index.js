import React from 'react';
import Paper from '@material-ui/core/Paper';

import Yatagarasu from '../../assets/yatagarasu.png';


const styles = {
  landing: {

  },
  yatagarasu: {
    width: '100px',
    height: '100px',
  },
  paper: {
    width: '480px',
    // margin: '40px',
    padding: '10px',
    display: 'inline-block',
    backgroundColor: 'rgba(255,255,255,0.3)',
  },
};

const LandingPage = () =>
  <div style={styles.landing}>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <a href="https://www.booking.com/hotel/jp/bnb-ninja-otsuka.ja.html"><img style={styles.yatagarasu} src={Yatagarasu} alt='秘密結社' /></a>
    <br />
    <br />
    <br />
    <Paper style={styles.paper} elevation={6}>
      I am the administrator of this linked guesthouse.<br />Please stay overnight(:
    </Paper>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
  </div>
export default LandingPage;