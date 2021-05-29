import React, { useState } from 'react';
import ModalAuth from './ModalAuth';

const Homepage = props => {
  
  const [showModalAuth, setShowModalAuth] = useState(true)

  const handleLogIn = data => console.log(data)

  return (
    <>
      { showModalAuth && (
        <ModalAuth
          closeModalAuth={ () => setShowModalAuth(false) }
        />
      )}
    </>
  )
  
}

export default Homepage;