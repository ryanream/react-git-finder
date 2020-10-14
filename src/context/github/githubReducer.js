import {
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USERS,
  GET_USER,
  GET_REPOS,
} from '../types';

// a reducer is just a function, return a default function
// Parameters ( state, action )
// the dispatch comes with a type and a possible payload. We want to evaluate the type. State is immutable, meaning we can't simply reassign it, we need a copy to return.
export default (state, action) => {
  switch (action.type) {
    case SEARCH_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case GET_USER:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    case CLEAR_USERS:
      return {
        ...state,
        users: [],
        loading: false,
      };
    case GET_REPOS: {
      return {
        ...state,
        repos: action.payload,
        loading: false,
      };
    }
    case SET_LOADING:
      return {
        // ... spread operator copies the current state.
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
