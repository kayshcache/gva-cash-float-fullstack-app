import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import ThingList from './things/ThingList';

export default class Home extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  conponentDidMount() {
    // Through the proxy (set in package.json)
    axios.get('/things')
      .then(res => {
	// handle success
	this.setState(res.data);
	console.log(res);
      })
      .catch(err => {
	// handle error
	console.warn(err);
      })
      .finally(() => {
	// always executed
      });
  }

  render() {
    return (
      <div className="Home">
	<h1>Thing List</h1>
          <ThingList />
	<Link to="/about">Go to About page</Link>
      </div>
    )
  }
}

