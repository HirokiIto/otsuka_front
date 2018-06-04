import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import Button from '@material-ui/core/Button';
import './Header.css';

import SignOutButton from '../../components/AuthWithFirebase/Signout';
import * as routes from '../../routes';


const NavigationAuth = () =>
  <ul>
    <Button color="secondary" component={Link} to={routes.CHECK_IN}>Check In</Button>
    <Button color="secondary" component={Link} to={routes.ACCOUNT}>Account</Button>
    <Button color="secondary" component={Link} to={routes.ABOUT}>About</Button>
    <SignOutButton />
  </ul>

const NavigationNonAuth = () =>
  <ul>
    <Button color="secondary" component={Link} to={routes.CHECK_IN}>Check In</Button>
    <Button color="secondary" component={Link} to={routes.ABOUT}>About</Button>
    <Button color="secondary" component={Link} to={routes.SIGN_IN}>Sign In</Button>
  </ul>


@inject('session')
@observer
export default class Navigation extends Component {
  render() {
    const { session } = this.props;
    return (
      <div className="nav">
        { session.user
            ? <NavigationAuth />
            : <NavigationNonAuth />
        }
      </div>
    )
  }

}
