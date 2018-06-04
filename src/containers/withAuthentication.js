import React from 'react';
import { inject } from 'mobx-react';

/* share session whole in App */
/* Appを噛むことによって、リロードしてもsession.userが保たれる */
const withAuthentication = (Component) => {
  @inject('session')
  class WithAuthentication extends React.Component {
    async componentDidMount() {
      const { session } = this.props;
      await session.checkLogin()
    }

    render() {
      return (
        <Component />
      );
    }
  }

  return (WithAuthentication);
}

export default withAuthentication;