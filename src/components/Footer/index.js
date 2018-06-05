import React, { Component } from 'react';

const styles = {
  footer: {
    margin: '0px',
    width: '100%',
    backgroundColor: 'rgba(251,197,21,0.6)',
  },
  left: {
    float: 'left',
    marginLeft: '40px',
    marginTop: '10px',
    marginBottom: '10px',
    fontSize: '0.8em',
  },
  right: {
    float: 'right',
  },
};

export default class Footer extends Component {
  render() {
    return (
      <footer style={styles.footer}>
        <div style={styles.left}>
          © 2018 Otsuka
        </div>
        <div style={styles.right}>
        </div>
      </footer>
    );
  }
}