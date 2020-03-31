import React from 'react';
import { connect } from 'react-redux';
import NewThingForm from './NewThingForm';
import ThingListItem from './ThingListItem';
import { deleteThing } from '../actions';

// Material-UI Imports
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';

const ThingList = ({ things = [{ thingName: 'first thing'}], onDeletePressed }) => (
  <div className="list-container">
    <NewThingForm />
    <Grid item xs={12} md={2}>
	<List>
          {things.map(thing => <ThingListItem thing={thing} onDeletePressed={onDeletePressed} />)}
	</List>
    </Grid>
  </div>
);

const mapStateToProps = state => ({
  things: state.things,
});

const mapDispatchToProps = dispatch => ({
  onDeletePressed: thingName => dispatch(deleteThing(thingName)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ThingList);

