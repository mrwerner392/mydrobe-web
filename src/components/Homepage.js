import React, { useState } from 'react';
import ModalAuth from './ModalAuth';
import { createAccount } from '../api/UserAPI';

const Homepage = props => {
  
  const [showModalAuth, setShowModalAuth] = useState(true)

  const handleCreateAccount = data => {
    createAccount(data)
  }

  const handleLogIn = data => console.log(data)

  return (
    <>
      { showModalAuth && (
        <ModalAuth
          handleCreateAccount={ handleCreateAccount }
          handleLogIn={ handleLogIn }
        />
      )}
    </>
  )
  
}

export default Homepage;