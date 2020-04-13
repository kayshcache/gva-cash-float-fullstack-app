import React from 'react';
import ThingList from './things/ThingList';
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
        <Grid item xs={12}>
	  <Typography variant="h3">
            List of Things
          </Typography>
	  <Typography variant="body1">
	    Login to manage the Grid of Things!
	  </Typography>
        </Grid>
	<Grid item xs={12}>
          <ThingList />
	</Grid>
      </Grid>
    )
  }
}

