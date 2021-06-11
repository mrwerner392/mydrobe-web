import React, { useState } from 'react';
import ModalAuth from './ModalAuth';
import Navbar from './Navbar';
import Content from './Content';

const Homepage = props => {
  
  const [showModalAuth, setShowModalAuth] = useState(true)
  const [contentType, setContentType] = useState('wardrobe')

  return (
    <>
      { showModalAuth && (
        <ModalAuth
          closeModalAuth={ () => setShowModalAuth(false) }
        />
      )}
      <Navbar setContentType={ setContentType }/>
      <Content contentType={ contentType }/>
    </>
  )
  
}

export default Homepage;