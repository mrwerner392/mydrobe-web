import React from 'react';
import { Modal as RBModal, Button } from 'react-bootstrap';

const Modal = props => {
  
  const {
    title,
    children,
    primaryBtnText,
    secondaryBtnText,
    handlePrimaryBtnClick,
    handleSecondaryBtnClick,
    closeButton,
    alert,
    dialogClassName = '',
    contentClassName = ''
  } = props

  return (
    <RBModal
      show={ true }
      dialogClassName={ dialogClassName }
      contentClassName={ contentClassName }
      centered
    >
      <RBModal.Header closeButton={ closeButton }>
        <RBModal.Title>{ title }</RBModal.Title>
      </RBModal.Header>
      <RBModal.Body>
        { children }
      </RBModal.Body>
      <RBModal.Footer>
        { !!alert && <p className='text-danger pr-5'>{ alert }</p> }
        <Button variant="secondary" onClick={ handleSecondaryBtnClick }>{ secondaryBtnText }</Button>
        <Button variant="primary" onClick={ handlePrimaryBtnClick }>{ primaryBtnText }</Button>
      </RBModal.Footer>
    </RBModal>
  )
}

export default Modal