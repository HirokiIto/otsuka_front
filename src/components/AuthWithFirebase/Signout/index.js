import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';

import { auth } from '../../../utils/firebase';

import * as routes from '../../../routes';

class SignOutButton extends Component {
  onClick = (e) => {
    auth.doSignOut(e)
    this.props.history.push(routes.SIGN_IN);
  }

  render() {
    return (
      <Button
        type="button"
        onClick={this.onClick}
      >
        Sign Out
      </Button>
    )
  }
}

export default withRouter(SignOutButton);