import React, { Component } from 'react';

import BGImage from '../../assets/bg0.png';
import './App.css';

import Header from '../Header';
import Main from '../../components/Main';
import Footer from '../../components/Footer';
/*
 * AppをwithAuthenticationに噛ませることでreloadしてもsession.userが保たれる
 */
import withAuthentication from '../withAuthentication';

const styles = {
  app: {
    backgroundImage: `url(${BGImage})`,
  },
};

class App extends Component {
  render() {
    return (
      <div className="App" style={styles.app}>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default withAuthentication(App);
