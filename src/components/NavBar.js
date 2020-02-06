import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  const link = {
    width: '100px',
    padding: '12px',
    margin: '0 6px 6px',
    background: 'blue',
    textDecoration: 'none',
    color: 'white',
  }
  return (
    <div className="navbar">
      <NavLink to="/" exactstyle={link} activeStyle={{background: 'darkblue'}}>Home</NavLink>
      <NavLink to="/movies" exactstyle={link} activeStyle={{background: 'darkblue'}}>Movies</NavLink>
      <NavLink to="/actors" exactstyle={link} activeStyle={{background: 'darkblue'}}>Actors</NavLink>
      <NavLink to="/directors" exactstyle={link} activeStyle={{background: 'darkblue'}}>Directors</NavLink>
    </div>
  );
};

export default NavBar;
