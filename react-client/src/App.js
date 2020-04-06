import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import NavBar from './NavBar';
import Footer from './Footer';
import CssBaseline from '@material-ui/core/CssBaseline';

import Home from './pages/Home';
import About from './pages/About';

const App = () => (
  <div>
    <NavBar />
    <CssBaseline />
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
