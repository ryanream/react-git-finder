import React from 'react';
import PropTypes from 'prop-types';

const Navbar = ( {icon, title} ) => {
  return (
    <nav className="navbar bg-primary">
       {/* this is all we are returning. A single h1. */}
      <h1>
        <i className={icon} /> {title}
      </h1>
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
