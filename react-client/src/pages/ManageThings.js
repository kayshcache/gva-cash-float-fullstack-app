import React from 'react';
import ThingGrid from './things/ThingGrid';
import NewThingForm from './things/NewThingForm';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

export default function ManageThings() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
	<Typography variant="h3">
	  Grid of Things
	</Typography>
	<Typography variant="p">
	  Add to, modify, or delete these things:
	</Typography>
      </Grid>
      <Grid item xs={12}>
	<NewThingForm />
      </Grid>
      <ThingGrid />
    </Grid>
  )
}

