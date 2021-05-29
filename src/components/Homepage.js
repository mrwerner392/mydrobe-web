import React, { useState } from 'react';
import ModalAuth from './ModalAuth';

const Homepage = props => {
  
  const [showModalAuth, setShowModalAuth] = useState(true)

  const handleCreateAccount = data => console.log(data)

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