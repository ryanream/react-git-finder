import React, { Component } from "react";
import PropTypes from "prop-types";

export class Search extends Component {
  // our Search class component has state, it has a single attribute - state.
  // this.state.text gets the text field value below (Search.state.text)
  // this .setState() sets the new state
  // state is simply an object telling us what the class component looks like at a given time.
  state = {
    text: "",
  };

  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
  };

  // e.target.name is a key that will create a new state field? if email or phone is input?
  // with only 1 expression, we can skip the { }
  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();
    // we need to pass this value up to the main component (App)
    this.props.searchUsers(this.state.text);
    this.setState({ text: "" });
  };

  render() {
    // destructuring props
    const { showClear, clearUsers } = this.props;

    return (
      <div>
        <form onSubmit={this.onSubmit} className="form">
          <input
            type="text"
            name="text"
            placeholder="Search Users..."
            value={this.state.text}
            onChange={this.onChange}
          />
          <input
            type="submit"
            value="Search"
            className="btn btn-dark btn-block"
          />
        </form>
        {showClear && (
          <button className="btn btn-light btn-block" onClick={clearUsers}>
            Clear
          </button>
        )}
      </div>
    );
  }
}

export default Search;
