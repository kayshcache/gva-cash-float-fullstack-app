import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createThing } from '../actions';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const NewThingForm = ({ things, onCreatePressed }) => {
  const [ inputValue, setInputValue ] = useState('');
  return (
    <form noValidate autoComplete="off">
      <TextField
	variant="outlined"
	label="Name new thing"
        value={inputValue}
        onChange={e => setInputValue(e.target.value)} />
      <Button
	variant="contained"
        onClick={() => {
          const isDuplicateThing = things.some(thing => thing.thingName === inputValue);
          if (!isDuplicateThing) {
	    onCreatePressed(inputValue);
	    setInputValue('');
	  }
	}}
	className="new-thing-button">
	Create Thing
      </Button>
    </form>
  );
};

const mapStateToProps = state => ({
  things: state.things,
});

const mapDispatchToProps = dispatch => ({
  onCreatePressed: thingName => dispatch(createThing(thingName)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewThingForm);
