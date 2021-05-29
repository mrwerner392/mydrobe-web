import React, { useState} from 'react';
import Modal from './Modal';
import { InputGroup, FormControl } from 'react-bootstrap';

const ModalAuth = ({ handleCreateAccount, handleLogIn }) => {

  const [formType, setFormType] = useState('create')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')

  const FORM_DATA = {
    create: {
      title: 'Create Account',
      secondaryBtnText: 'Log In',
      handlePrimaryBtnClick: () => handleCreateAccount({
        username,
        password,
        passwordConfirmation
      }),
      handleSecondaryBtnClick: () => setFormType('login')
    },
    login: {
      title: 'Log In',
      secondaryBtnText: 'Create Account',
      handlePrimaryBtnClick: () => handleLogIn({
        username,
        password
      }),
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
        <FormControl
          placeholder='username'
          value={ username }
          onChange={ event => setUsername(event.target.value) }
        ></FormControl>
      </InputGroup>
      <InputGroup className='mb-3'>
        <FormControl
          type='password'
          placeholder='password'
          value={ password }
          onChange={ event => setPassword(event.target.value) }
        ></FormControl>
      </InputGroup>
      { formType === 'create' && (
        <InputGroup className='mb-3'>
          <FormControl
            type='password'
            placeholder='confirm password'
            value={ passwordConfirmation }
            onChange={ event => setPasswordConfirmation(event.target.value) }
          ></FormControl>
        </InputGroup>
      )}
    </Modal>
  )

}

export default ModalAuth