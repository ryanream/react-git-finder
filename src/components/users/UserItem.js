import React from "react";
import PropTypes from "prop-types";

// class UserItem extends Component {
// we also don't need render() any longer, just the return

const UserItem = ({ user: { login, avatar_url, html_url } }) => {
  // destructure this.state to clean up code below
  //const { login, avatar_url, html_url } = props.user;
  // then, destructure even further to the UserItem argument instead of ( props )

  return (
    <div className="card text-center">
      <img
        src={avatar_url}
        alt=""
        className="round-img"
        style={{ width: "60px" }}
      />
      <h3>{login}</h3>
      <div>
        {" "}
        <a href={html_url} className="btn btn-dark btn-sm my-1">
          More
        </a>
      </div>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItem;
