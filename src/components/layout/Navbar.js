import React from 'react';
import PropTypes from 'prop-types';
// use { } here because Link is NOT the default export
import { Link } from 'react-router-dom';

const Navbar = ( {icon, title} ) => {
  return (
    <nav className="navbar bg-primary">
       {/* this is all we are returning. A single h1. */}
      <h1>
        <i className={icon} /> {title}
      </h1>

      <ul>
        {/* use link here to preserve state. <a> will reload the page and reset state. */}
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>

    </nav>
  )

}

  // sets defaults for title/icon
  Navbar.defaultProps = {
    title: "Github Finder",
    icon: "fab fa-github"
  };

  // type checks for string
  Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  };


export default Navbar;
