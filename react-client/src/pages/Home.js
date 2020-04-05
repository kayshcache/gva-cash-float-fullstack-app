import React from 'react';
import { Link } from 'react-router-dom';
import ThingGrid from './things/ThingList';
import NewThingForm from './things/NewThingForm';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

export default class Home extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <Grid container spacing={2}>
        <Grid item>
	  <Typography variant="h3">
            Grid of Things
          </Typography>
        </Grid>
        <Grid item xs={12}>
	  <NewThingForm />
        </Grid>
        <ThingGrid />
        <Grid item xs={12}>
	  <Link to="/about">Go to About page</Link>
        </Grid>
      </Grid>
    )
  }
}

// TODO:
// Put the footer into the pages so as to include the Router links
