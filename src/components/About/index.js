import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  about: {
    margin: '20px',
    marginTop: '0px',
    marginBottom: '0px',
  },
  paper: {
    padding: '20px',
    backgroundColor: 'rgba(255,255,255,0.6)',
  },
  card: {
    margin: '20px',
    maxWidth: 345,
    display: 'inline-block',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
};

export default class About extends Component {
  render() {
    return (
      <div style={styles.about}>
        <br />
        <h1>Develop by the following combinations.</h1>
        <br />
        <Paper style={styles.paper} elevation={6}>
          {/*create-react-app*/}
          <Card style={styles.card}>
            <CardMedia
              style={styles.media}
              image="https://camo.githubusercontent.com/29765c4a32f03bd01d44edef1cd674225e3c906b/68747470733a2f2f63646e2e7261776769742e636f6d2f66616365626f6f6b2f6372656174652d72656163742d6170702f323762343261632f73637265656e636173742e737667"
              title="App Template"
            />
            <CardContent>
              <Typography gutterBottom variant="headline" component="h2">
                Create React App
              </Typography>
              <Typography component="p">
                you can focus on the code.
                Just create a project, and you’re good to go.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary" href="https://github.com/facebook/create-react-app">
                Learn More
              </Button>
            </CardActions>
          </Card>
          {/*mobx*/}
          <Card style={styles.card}>
            <CardMedia
              style={styles.media}
              image="https://mobx.js.org/docs/mobx.png"
              title="Simple, scalable state management"
            />
            <CardContent>
              <Typography gutterBottom variant="headline" component="h2">
                Mobx
              </Typography>
              <Typography component="p">
                MobX is proudly sponsored by Mendix, Coinbase, Facebook Open Source and many
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary" href="https://mobx.js.org/">
                Learn More
              </Button>
            </CardActions>
          </Card>
          {/*react-router*/}
          <Card style={styles.card}>
            <CardMedia
              style={styles.media}
              image="https://camo.githubusercontent.com/f63754b8412368e820601967af6dea84312b925b/68747470733a2f2f7265616374747261696e696e672e636f6d2f72656163742d726f757465722f616e64726f69642d6368726f6d652d313434783134342e706e67"
              title="Declarative routing for React"
            />
            <CardContent>
              <Typography gutterBottom variant="headline" component="h2">
                React Router
              </Typography>
              <Typography component="p">
                react-router is developed and maintained by React Training and many amazing contributors
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary" href="https://github.com/ReactTraining/react-router">
                Learn More
              </Button>
            </CardActions>
          </Card>
          {/*firebase*/}
          <Card style={styles.card}>
            <CardMedia
              style={styles.media}
              image="https://firebase.google.com/images/cloud_and_firebase.png"
              title="Database"
            />
            <CardContent>
              <Typography gutterBottom variant="headline" component="h2">
                Firebase
              </Typography>
              <Typography component="p">
                Firebase はモバイルアプリの作成とビジネスの成長に役立ちます。
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary" href="https://firebase.google.com">
                Learn More
              </Button>
            </CardActions>
          </Card>
          {/*material-ui*/}
          <Card style={styles.card}>
            <CardMedia
              style={styles.media}
              image="https://material-ui.com/static/images/material-ui-logo.svg"
              title="Design Framework"
            />
            <CardContent>
              <Typography gutterBottom variant="headline" component="h2">
                material-ui
              </Typography>
              <Typography component="p">
                React components that implement `Google's` Material Design.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary" href="https://material-ui.com/">
                Learn More
              </Button>
            </CardActions>
          </Card>
          {/*react-calendar-timeline*/}
          <Card style={styles.card}>
            <CardMedia
              style={styles.media}
              image="https://raw.githubusercontent.com/namespace-ee/react-calendar-timeline/master/demo.gif"
              title="component"
            />
            <CardContent>
              <Typography gutterBottom variant="headline" component="h2">
                React Calendar Timeline
              </Typography>
              <Typography component="p">
                A modern and responsive react timeline component.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary" href="https://github.com/namespace-ee/react-calendar-timeline">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Paper>
        <br />
      </div>
    );
  }
}