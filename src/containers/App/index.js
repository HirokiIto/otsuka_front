import React, { Component } from 'react';
import { Helmet } from "react-helmet";

import BGImage from '../../assets/bg0.png';
import IosIcon60 from '../../assets/ios-icons/Icon-60@2x.png';
import IosIcon72 from '../../assets/ios-icons/Icon-72@2x.png';
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
        <Helmet>
          <title>OtsukaGuestHouse</title>
          {/* iosでホーム画面に追加でフルスクリーン表示 */}
          <meta name="apple-mobile-web-app-title" content="OtsukaCheckIn" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          {/* iosでホーム画面のicon表示 */}
          <link rel="apple-touch-icon" href={IosIcon60} />
          <link rel="apple-touch-icon" sizes="72x72" href={IosIcon72} />
        </Helmet>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default withAuthentication(App);
