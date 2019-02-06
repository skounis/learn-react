import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

// Renders a list of users...
const Users = ({ users }) => (
  <ul>{users.map((u,i) => 
    <li key={i}>
      <NavLink 
        exact
        to={'/users/' + i}>{u.first} {u.last}</NavLink> 
    </li>)}
  </ul>
);

Users.propTypes = {
  users: PropTypes.array.isRequired
};

export default Users;