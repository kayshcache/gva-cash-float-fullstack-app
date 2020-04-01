import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 100,
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

const ThingListItem = ({ thing, onDeletePressed }) => {
  const classes = useStyles();

  return (
  <Grid item xs={12} sm={6} md={4} lg={3}>
    <Card className={classes.root}>
      <CardContent>
	<Typography className={classes.title} color="textSecondary" gutterBottom>
	  thingName: {thing.thingName}
	</Typography>
        <Typography className={classes.pos} color="textSecondary">
          ObjectID Generated by MongoAtlas;
        </Typography>
        <Typography variant="body2" component="p">
          ObjectID: {thing._id}
          <br />
          {'"more info for things coming"'}
        </Typography>
      </CardContent>
      <CardActions>
	<Button size="small" onClick={() => onDeletePressed(thing.thingName)}>
	  Delete
	</Button>
      </CardActions>
    </Card>
  </Grid>
  );
}

export default ThingListItem;
