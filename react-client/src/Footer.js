import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
      <footer>
        <span>
          <Link to="/">Home</Link>&nbsp;
          <Link to="/profile">Profile</Link>&nbsp;
          <Link to="/about">About</Link>&nbsp;
	  <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Learn React</a>
        </span>
      </footer>
);

export default Footer;
