import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import moment from "moment";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import withAuthorization from '../withAuthorization';

const styles = {
  paper: {
    margin: '40px',
    padding: '20px',
    display: 'inline-block',
    overflowX: 'auto',
    width: '80%',
  },
};

@inject('guest')
@observer
class Security extends Component {
  componentDidMount() {
    const { guest } = this.props;
    // サーバーと連携したら、サーバーからデータを取得する
    guest.getHistory();
  }

  render() {
    const { guest } = this.props;
    const guestList = guest.list.map((one, i) => (
      <TableRow key={`guest_list_${i}`}>
        <TableCell>{moment(one.date).format('YYYY-MM-DD')}</TableCell>
        <TableCell>{one.name}</TableCell>
        <TableCell>{one.sex}</TableCell>
        <TableCell>{one.age}</TableCell>
        <TableCell>{one.address}</TableCell>
        <TableCell>{one.comingFrom ? one.comingFrom : ''}</TableCell>
        <TableCell>{one.nationality ? one.nationality : ''}</TableCell>
        <TableCell>{one.passportNumber ? one.passportNumber : ''}</TableCell>
      </TableRow>
    ));

    return (
      <div>
        <br />
        <br />
        <Paper style={styles.paper} elevation={6}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>check in date</TableCell>
                <TableCell>name</TableCell>
                <TableCell>sex</TableCell>
                <TableCell numeric>age</TableCell>
                <TableCell>address</TableCell>
                <TableCell>coming from</TableCell>
                <TableCell>nationality</TableCell>
                <TableCell>passport</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {guestList}
            </TableBody>
          </Table>
        </Paper>
      </div>
    )
  }
}

export default withAuthorization(Security);