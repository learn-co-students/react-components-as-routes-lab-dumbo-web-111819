import React from 'react';
// import { NavLink } from 'react-router-dom';
import { Button, Popup } from 'semantic-ui-react'

const NavBar = () => {
  return (
    <div>

<Popup content='Add users to your feed' trigger={<Button icon='add' />} />
    </div>
    // <div className="navbar">
    //   <NavLink to="/">Home</NavLink>
    //   <NavLink to="/movies">Movies</NavLink>
    //   <NavLink to="/directors">Directors</NavLink>
    //   <NavLink to="/actors">Actors</NavLink>
    // </div>
  );
};

export default NavBar;
