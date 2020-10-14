import React, { useState, useContext } from 'react';
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';

// our Search class component has state, it has a single attribute - state.
// this.state.text gets the text field value below (Search.state.text)
// this .setState() sets the new state
// state is simply an object telling us what the class component looks like at a given time.
const Search = () => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);
  // Text State - [ state variable, setState method ] = useState('');
  // destructure - pull out whatever we want to call this piece of state - 'text'. Then create a method to change the state ( hence setText instead of the normal - setState() ) and choose a default value as the parameter.
  const [text, setText] = useState('');

  // need to add 'const' to have a function within a function
  const onSubmit = e => {
    e.preventDefault();
    if (text === '') {
      alertContext.setAlert('Please enter something to search.', 'light');
    } else {
      githubContext.searchUsers(text);
      setText('');
    }
  };

  // replace this.setState with our new state method - setText
  // pull e.target.name and just use the value we want to send
  const onChange = e => setText(e.target.value);

  return (
    // remove ' this ' from everywhere. ' text ' is now a state property and a variable defined here.
    <div>
      <form onSubmit={onSubmit} className='form'>
        <input
          type='text'
          name='text'
          placeholder='Search Users...'
          // change this.state.text to ' text '
          value={text}
          onChange={onChange}
        />
        <input
          type='submit'
          value='Search'
          className='btn btn-dark btn-block'
        />
      </form>
      {githubContext.users.length > 0 && (
        <button
          className='btn btn-light btn-block'
          onClick={githubContext.clearUsers}
        >
          Clear
        </button>
      )}
    </div>
  );
};

export default Search;
