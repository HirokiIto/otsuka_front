import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import CalendarIcon from '@material-ui/icons/DateRange';
import SecurityIcon from '@material-ui/icons/Security';
import HistoryIcon from '@material-ui/icons/History';

import * as routes from '../../routes';

const styles = {
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
};

@inject('session')
@observer
class MyDrawer extends Component {
  render() {
    const { session } = this.props;

    const sideList = (
      <div style={styles.list}>
        <List component="nav">
          <Link to={routes.ACCOUNT}>
            <ListItem button>
              <ListItemIcon>
                <AccountBoxIcon />
              </ListItemIcon>
              <ListItemText primary="Account" />
            </ListItem>
          </Link>
        </List>
        <Divider />
        <List component="nav">
          <ListItem button>
            <Link to={routes.CALENDAR}>
              <ListItemIcon>
                <CalendarIcon />
              </ListItemIcon>
              <ListItemText primary="Calendar" />
            </Link>
          </ListItem>


          <ListItem button>
            <Link to={routes.SECURITY}>
              <ListItemIcon>
                <SecurityIcon />
              </ListItemIcon>
              <ListItemText primary="Security" />
            </Link>
          </ListItem>

          <ListItem button>
            <Link to={routes.GUESTHISTORY}>
              <ListItemIcon>
                <HistoryIcon />
              </ListItemIcon>
              <ListItemText primary="Guest History" />
            </Link>
          </ListItem>
        </List>
      </div>
    );

    return (
      <div>
        <Drawer open={session.drawer} onClose={session.toggleDrawer}>
          <div
            tabIndex={0}
            role="button"
            onClick={session.toggleDrawer}
            onKeyDown={session.toggleDrawer}
          >
            {sideList}
          </div>
        </Drawer>
      </div>
    )
  }
}

export default MyDrawer;