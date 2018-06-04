import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import withAuthorization from '../withAuthorization';

@inject('session')
@observer
class AccountPage extends Component {

  render() {
    const { session } = this.props;

    return (
      <div>
        <br />
        <h1>Account: {session.user.email}</h1>
        <br />
      </div>
    )
  }
}

export default withAuthorization(AccountPage);