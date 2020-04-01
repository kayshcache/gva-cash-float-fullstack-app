import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import NewThingForm from './NewThingForm';
import ThingListItem from './ThingListItem';
import { deleteThing } from '../actions';
import { loadThings } from '../thunks';

// Material-UI Imports
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

// Export for testing
export const ThingList = ({ things = [], isLoading, onDeletePressed, onDisplayAlertClicked, startLoadingThings,}) => {

  const classes = useStyles();
  useEffect(() => {
    startLoadingThings();
  }, [startLoadingThings]);

  const loadingMessage = <div>Loading things...</div>;
  const content = (
    <div className={classes.root}>
      <Grid container spacing={3}>
	  {things.map(thing => <ThingListItem key={thing.thingName} thing={thing} onDeletePressed={onDeletePressed} />)}
      </Grid>
    </div>
    );

  return isLoading ? loadingMessage : content;
};

// Redux State Handling
const mapStateToProps = state => ({
  things: state.things,
  isLoading: state.isLoading,
});

const mapDispatchToProps = dispatch => ({
  startLoadingThings: () => dispatch(loadThings()),
  onDeletePressed: thingName => dispatch(deleteThing(thingName)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ThingList);

