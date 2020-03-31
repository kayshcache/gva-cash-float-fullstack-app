import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const ThingListItem = ({ thing, onDeletePressed }) => (
  <ListItem>
      <ListItemText primary={thing.thingName} />
      <ButtonGroup size="small">
	<Button variant="contained">Mark True</Button>
	<Button variant="contained" onClick={() => onDeletePressed(thing.thingName)}>
	  Delete
	</Button>
      </ButtonGroup>
  </ListItem>
);

export default ThingListItem;
