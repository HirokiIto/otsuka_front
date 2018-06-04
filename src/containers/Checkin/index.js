import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const styles = {
  paper: {
    margin: '10px',
    /* うまい具合に分割してくれる */
    display: 'block',
    justifyContent: 'center',
    alignItems: 'center',
    /* うまい具合に分割してくれる */
    backgroundColor: 'rgba(255,255,255,0.6)',
  },
  textField: {
    margin: 40,
    width: '400px',
  },
  submit: {
    margin: 20,
  },
};

@inject('guest')
@observer
export default class Checkin extends Component {
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  onSubmit(e, guest) {
    this.setState({ open: true });
    guest.submit();
  };

  render() {
    const { guest } = this.props;

    const isInvalid =
      guest.name === '' ||
      guest.sex === '' ||
      guest.age === '' ||
      guest.address === '';

    return (
      <div>
        <br />
        <h1>Confirm Check-In information</h1>
        <br />
        <form>
          <Paper style={styles.paper} elevation={6}>
            <TextField
              id="name"
              label="Name"
              className="name"
              style={styles.textField}
              value={guest.name}
              onChange={guest.handleChange('name')}
              margin="normal"
            />
            <TextField
              id="sex"
              label="Sex"
              className="sex"
              style={styles.textField}
              value={guest.sex}
              onChange={guest.handleChange('sex')}
              margin="normal"
            />
            <TextField
              id="age"
              label="Age"
              className="age"
              style={styles.textField}
              value={guest.age}
              onChange={guest.handleChange('age')}
              margin="normal"
            />
            <TextField
              id="address"
              label="Address"
              className="address"
              style={styles.textField}
              value={guest.address}
              onChange={guest.handleChange('address')}
              margin="normal"
            />
            <TextField
              id="comingFrom"
              label="Coming From (Place you stayed on the previous day)"
              className="comingFrom"
              style={styles.textField}
              value={guest.comingFrom}
              onChange={guest.handleChange('comingFrom')}
              margin="normal"
            />
            <TextField
              id="nationality"
              label="Nationality"
              className="nationality"
              style={styles.textField}
              value={guest.nationality}
              onChange={guest.handleChange('nationality')}
              margin="normal"
            />
            <TextField
              id="passportNumber"
              label="Passport Number"
              className="passportNumber"
              style={styles.textField}
              value={guest.passportNumber}
              onChange={guest.handleChange('passportNumber')}
              margin="normal"
            />
          </Paper>

          <Button variant="raised" disabled={isInvalid} style={styles.submit} type="button" color="primary" className="submit-btn" onClick={e => this.onSubmit(e, guest)}>
            Submit
          </Button>
        </form>
        <br />

        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Check In Information"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              {guest.result}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary" autoFocus>
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    )
  }

}