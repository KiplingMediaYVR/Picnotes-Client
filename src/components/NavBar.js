import React from 'react';
import {Link} from 'react-router-dom';

function NavBar (props) {
  const {user, onSignOutClick = () => {}} = props;

  const handleSignOut = event => {
    event.preventDefault();
    onSignOutClick();
  };

  return (
    <nav
      style={{
        padding: '10px',
        display: 'flex',
      }}
    >
      <Link style={{marginRight: '20px'}} to="/">Picnotes</Link>
      {
        user ? ([
          <span key = '1'>
            Hello {user.username}
          </span>,

          <Link style={{marginRight: '20px'}} to="/notes/new">New Note</Link>,

          <a onClick = {handleSignOut} key = '2' href = '#'> Sign Out </a>
        ]) : (
          <Link style={{marginRight: '20px'}} to="/signin">Sign In</Link>
        )
      }
    </nav>
  );
}

export {NavBar};
