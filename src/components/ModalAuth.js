import React, { useState} from 'react';
import Modal from './Modal'

const ModalAuth = props => {
  
  const [formType, setFormType] = useState('create')

  const FORM_DATA = {
    create: {
      title: 'Create Account',
      secondaryBtnText: 'Log In',
      handlePrimaryBtnClick: () => 'handle create account',
      handleSecondaryBtnClick: () => setFormType('login')
    },
    login: {
      title: 'Log In',
      secondaryBtnText: 'Create Account',
      handlePrimaryBtnClick: () => 'handle create account',
      handleSecondaryBtnClick: () => setFormType('create')
    }
  }

  const formData = FORM_DATA[formType]
  
  return (
    <Modal
      title={ formData.title }
      primaryBtnText='Submit'
      secondaryBtnText={ formData.secondaryBtnText }
      handlePrimaryBtnClick={ formData.handlePrimaryBtnClick }
      handleSecondaryBtnClick={ formData.handleSecondaryBtnClick }
    >
      <p>Modal Body</p>
    </Modal>
  )

}

export default ModalAuth