import React from "react";
import { Link } from "react-router-dom";

export default ({ currentUser, logout }) => {
  
  window.addEventListener('click', function(event) {
    if (!event.target.matches('.user-dropdown-button')) {
      let dropdown = document.getElementsByClassName('header-dropdown-nav');
      let i;
      for (i = 0; i < dropdown.length; i++) {
        let dropdowned = dropdown[i];
        if (dropdowned.classList.contains('show')) {
          dropdowned.classList.remove('show');
        }
      }
    }
  })
  
  const clicked =  () => {
    return document.getElementById('navDropdown').classList.toggle('show')
  }

  const displayNav = currentUser ? (
    <>
      <div className='user-dropdown-nav'>
        <img
          src={window.userIcon}
          onClick={() => clicked()}
          className='user-dropdown-header-icon'
        />

        <div id='navDropdown' className='user-dropdown-nav-content'>
          <Link
            to={`/users/${currentUser}`} 
            className="dropdown-link">
            Profile
          </Link>
          <br />
          <a
            className='dropdown-link' 
            onClick={logout}>
            Log out
          </a>
        </div>
      </div>
    </>

  ) : (
      <>
      <Link 
        to='/login' 
        className='header-login-button'>
          Log In
      </Link>
        <Link 
          to='/signup' 
          className='header-signup-button'>
          Sign Up
      </Link>
      </>
    );

  return (
    <div className='nav-main'>
      <div className='nav-logos'>
        <div className='nav-logo-links'>
          <div className='whitespace'>
            {/* fix below logo
            <img
              src={window.prfctpx}
              onClick={() => clicked()}
              className='logo-link'
            /> */}

            <Link 
              to="/" 
              className='logo-link'>
              p r f c t p x
            </Link>
            {/* ??? maybe add personal links?*/}

          </div>
        </div>
      </div>
    <div className='display-nav'>{displayNav}</div>
  </div>
  );
};

