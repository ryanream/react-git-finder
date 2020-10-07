
// Class based Component
// used the ' rce ' shortcut to create this React, Component, Export generic. class based component that exports
import React, { Component } from 'react';
import PropTypes from 'prop-types';



export class Navbar extends Component {
    // sets defaults for title/icon
    static defaultProps = {
        title: 'Github Finder',
        icon: 'fab fa-github'
    };
    // type checks for string
    static propTypes = {
        title: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired
        };
        
    render() {
        return (
            <nav className= "navbar bg-primary">
                <h1>
                    <i className = {this.props.icon} /> {this.props.title}
                </h1>
            </nav>
        )
    }
}

export default Navbar
