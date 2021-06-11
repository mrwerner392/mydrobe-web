import React, { useState, useEffect } from 'react';
import { InputGroup, FormControl } from 'react-bootstrap';
import Modal from './Modal';
import userAPI from '../api/userAPI';

const USERNAME_ERRORS = {
  length: 'Username must be at least 5 characters.',
  uniqueness: ' has already been taken.'
}

const ModalAuth = ({ closeModalAuth }) => {

  const [formType, setFormType] = useState('create')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')
  const [usernameErrorType, setUsernameErrorType] = useState(null)
  const [passwordError, setPasswordError] = useState('')
  const [passwordConfirmationError, setPasswordConfirmationError] = useState('')
  const [alert, setAlert] = useState('')

  useEffect(() => {
    if (usernameErrorType === 'length' && username.length >= 5) setUsernameErrorType(null)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [username])

  useEffect(() => {
    if (passwordError && password.length >= 8) setPasswordError('')
    if (passwordConfirmationError && passwordConfirmation === password) setPasswordConfirmationError('')
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [password, passwordConfirmation])

  const handleCreateAccount = async () => {
    if (validateForm()) {
      userAPI.createAccount({ username, password })
      .then(res => {
        console.log('success', res)
        // closeModalAuth()
      })
      .catch(e => {
        console.log('error', e)
        if (e.includes('Username')) {
          setUsernameErrorType('uniqueness')
        } else {
          setAlert(e)
        }
      })
    }
  }

  const handleLogInSubmit = () => {
    if (validateForm()) {
      userAPI.logIn({ username, password })
      .then(console.log)
      .catch(console.log)
    }
  }

  const validateForm = () => {
    let valid = true
    if (username.length < 5) {
      setUsernameErrorType('length')
      valid = false
    } else if (password.length < 8) {
      setPasswordError('Password must be at least 8 characters.')
      valid = false
    } else if (formType === 'create' && passwordConfirmation !== password) {
      setPasswordConfirmationError('Passwords do not match')
      valid = false
    }
    return valid
  }

  const formData = formType === 'create'
    ? {
      title: 'Create Account',
      secondaryBtnText: 'Log In',
      handlePrimaryBtnClick: handleCreateAccount,
      handleSecondaryBtnClick: () => setFormType('login')
    }
    : {
      title: 'Log In',
      secondaryBtnText: 'Create Account',
      handlePrimaryBtnClick: handleLogInSubmit,
      handleSecondaryBtnClick: () => setFormType('create')
    }

  return (
    <Modal
      title={ formData.title }
      primaryBtnText='Submit'
      secondaryBtnText={ formData.secondaryBtnText }
      handlePrimaryBtnClick={ formData.handlePrimaryBtnClick }
      handleSecondaryBtnClick={ formData.handleSecondaryBtnClick }
      closeButton={ false }
      alert={ alert }
      dialogClassName='w-50 mw-100'
    >
      <InputGroup className='mb-3' hasValidation>
        <FormControl
          placeholder='username'
          value={ username }
          onChange={ event => setUsername(event.target.value) }
          isInvalid={ !!usernameErrorType }
        />
        <FormControl.Feedback type='invalid'>
          { usernameErrorType === 'length' && USERNAME_ERRORS['length'] }
          { usernameErrorType === 'uniqueness' && `${username} ${USERNAME_ERRORS['uniqueness']}` }
        </FormControl.Feedback>
      </InputGroup>
      <InputGroup className='mb-3' hasValidation>
        <FormControl
          type='password'
          placeholder='password'
          value={ password }
          onChange={ event => setPassword(event.target.value) }
          isInvalid={ !!passwordError }
        />
        <FormControl.Feedback type='invalid'>
          { passwordError }
        </FormControl.Feedback>
      </InputGroup>
      { formType === 'create' && (
        <InputGroup className='mb-3' hasValidation>
          <FormControl
            type='password'
            placeholder='confirm password'
            value={ passwordConfirmation }
            onChange={ event => setPasswordConfirmation(event.target.value) }
            isInvalid={ !!passwordConfirmationError }
          />
          <FormControl.Feedback type='invalid'>
            { passwordConfirmationError }
          </FormControl.Feedback>
        </InputGroup>
      )}
    </Modal>
  )

}

export default ModalAuth