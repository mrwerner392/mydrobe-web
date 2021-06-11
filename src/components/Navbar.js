import React from 'react';
import { Navbar as RBNavbar, NavDropdown } from 'react-bootstrap';
import '../styles/Navbar.css';

const Navbar = props => {

  const { username, setContentType } = props

  return (
    <RBNavbar id='navbar' className='d-flex justify-content-between pl-5 pr-5' bg='light' variant='light'>
      <RBNavbar.Brand>myDrobe</RBNavbar.Brand>
      <NavDropdown className='pl-5' title={ username ? username : 'Account' }>
        <NavDropdown.Item onClick={ () => setContentType('account details') }>Account Details</NavDropdown.Item>
        <NavDropdown.Item onClick={ () => setContentType('my wardrobe') }>My Wardrobe</NavDropdown.Item>
        <NavDropdown.Item onClick={ () => console.log('logout') }>Log Out</NavDropdown.Item>
      </NavDropdown>
    </RBNavbar>
  )

}

export default Navbar