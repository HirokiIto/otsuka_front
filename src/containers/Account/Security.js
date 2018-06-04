import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import Paper from '@material-ui/core/Paper';

import PasswordChangeForm from '../../components/AuthWithFirebase/PasswordChange';
import withAuthorization from '../withAuthorization';

const styles = {
  paper: {
    width: '480px',
    margin: '40px',
    padding: '20px',
    display: 'inline-block',
  },
};

@inject('session')
@observer
class Security extends Component {
  render() {
    const { session } = this.props;
    return (
      <div>
        <br />
        <h1>Security: {session.user.email}</h1>
        <br />
        <Paper style={styles.paper} elevation={6}>
          <PasswordChangeForm />
        </Paper>
      </div>
    )
  }
}

export default withAuthorization(Security);