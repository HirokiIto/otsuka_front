import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import withAuthorization from '../../withAuthorization';

import CustomTimeline from "./CustomTimeline";
import 'react-calendar-timeline/lib/Timeline.css'
import './Calendar.css';

const styles = {
  paper: {
    margin: '10px',
    /* うまい具合に分割してくれる */
    display: 'block',
    justifyContent: 'center',
    alignItems: 'center',
    /* うまい具合に分割してくれる */
  },
  textField: {
    margin: 20,
    width: '130px',
  },
  btn: {
    margin: 20,
  },
};

@inject('reservedGuests')
@observer
class Calendar extends Component {
  render() {
    const { reservedGuests } = this.props;

    const isInvalidGroup = reservedGuests.groupTitle === '';
    const isInvalidItem =
      reservedGuests.groupTitle === '' ||
      reservedGuests.itemStartTime === '' ||
      reservedGuests.itemEndTime === '' ||
      reservedGuests.itemTitle === '';

    return (
      <div>
        <br />
        <Paper style={styles.paper} elevation={1}>
          <TextField
            id="name"
            label="Name"
            className="name"
            style={styles.textField}
            value={reservedGuests.groupTitle}
            onChange={reservedGuests.handleChange('groupTitle')}
            margin="normal"
          />
          <TextField
            id="itemStartTime"
            label="Reserved date"
            className="itemStartTime"
            style={styles.textField}
            value={reservedGuests.itemStartTime}
            onChange={reservedGuests.handleChange('itemStartTime')}
            margin="normal"
          />
          <TextField
            id="itemEndTime"
            label="Departure date"
            className="itemEndTime"
            style={styles.textField}
            value={reservedGuests.itemEndTime}
            onChange={reservedGuests.handleChange('itemEndTime')}
            margin="normal"
          />
          <TextField
            id="itemTitle"
            label="How many ppl"
            className="itemTitle"
            style={styles.textField}
            value={reservedGuests.itemTitle}
            onChange={reservedGuests.handleChange('itemTitle')}
            margin="normal"
          />
        </Paper>
        {/*<Button variant="raised" disabled={isInvalidGroup} color="primary" style={styles.btn} className="group-btn" onClick={reservedGuests.addGroups}>
        Add Name
        </Button>*/}
        <Button variant="raised" disabled={isInvalidGroup} color="primary" style={styles.btn} className="group-btn" onClick={reservedGuests.deleteGroups}>
        Del Name
        </Button>
        {/*<Button variant="raised" disabled={isInvalidItem} color="primary" style={styles.btn} className="item-btn" onClick={reservedGuests.addItems}>
        Add Item
        </Button>
        <Button variant="raised" disabled={isInvalidGroup} color="primary" style={styles.btn} className="item-btn" onClick={reservedGuests.deleteItems}>
        Del Item
        </Button>*/}
        <Button variant="raised" disabled={isInvalidItem} color="primary" style={styles.btn} className="g-i-btn" onClick={reservedGuests.addGroupsAndItems}>
        Add Name
        </Button>
        <CustomTimeline />
        <br />
      </div>
    )
  }
}

export default withAuthorization(Calendar);