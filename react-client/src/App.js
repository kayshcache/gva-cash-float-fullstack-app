import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import NavBar from './NavBar';
import Footer from './Footer';

import Home from './pages/Home';
import About from './pages/About';

const App = () => (
  <div>
    <NavBar />
    <Container maxWidth="lg">
      <Router>
	<Switch>
	  <Route path="/about">
	    <About />
	  </Route>
	  <Route path="/">
	    <Home />
	  </Route>
	</Switch>
      </Router>
      <Footer />
    </Container>
  </div>
);

export default App;
