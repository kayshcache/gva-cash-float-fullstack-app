import React from 'react';
import { Link } from 'react-router-dom';
import ThingList from './things/ThingList';
import NewThingForm from './things/NewThingForm';

export default class Home extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <>
	<h1>Thing List</h1>
        <NewThingForm />
        <ThingList />
	<Link to="/about">Go to About page</Link>
      </>
    )
  }
}

// TODO:
// Put the footer into the pages so as to include the Router links
