import React, { useState} from 'react';
import Modal from './Modal';
import { InputGroup, FormControl } from 'react-bootstrap';

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
      <InputGroup className='mb-3'>
        <FormControl placeholder='username'></FormControl>
      </InputGroup>
      <InputGroup className='mb-3'>
        <FormControl type='password' placeholder='password'></FormControl>
      </InputGroup>
      { formType === 'create' && (
        <InputGroup className='mb-3'>
          <FormControl type='password' placeholder='confirm password'></FormControl>
        </InputGroup>
      )}
    </Modal>
  )

}

export default ModalAuth