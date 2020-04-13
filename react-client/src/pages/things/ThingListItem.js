import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const ThingListItem = ({ thing }) => {
  const classes = useStyles();

  return (
    <ListItem>
      <Card className={classes.root} variant="outlined">
	<CardContent>
	  <Typography className={classes.title} gutterBottom>
	    {thing.thingName}
	  </Typography>
	</CardContent>
      </Card>
    </ListItem>
  );
}

export default ThingListItem;
