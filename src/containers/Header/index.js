import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { amber, grey } from '@material-ui/core/colors'
import logo from '../../assets/logo.svg';
import './Header.css';

import Navigation from './Navigation'
import MyDrawer from './MyDrawer'

const theme = createMuiTheme({ palette: { primary: amber, secondary: grey } });

@inject('session')
@observer
export default class Header extends Component {

  render() {
    const { session } = this.props;
    return (
      <MuiThemeProvider theme={theme}>
        <AppBar position="static" className="header">
          <Toolbar>
            { session.user
              ?
                <IconButton aria-label="Menu" onClick={session.toggleDrawer}>
                  <MenuIcon />
                </IconButton>
              : null
            }
            <Link to='/'><img src={logo} className="header-logo" alt="logo" /></Link>
            <Typography variant="title">
              Welcome to Otsuka
            </Typography>
            <Navigation />
          </Toolbar>
        </AppBar>
        <MyDrawer />
      </MuiThemeProvider>

    );
  }
}