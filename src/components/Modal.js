import React from 'react';
import { Modal as RBModal, Button } from 'react-bootstrap';

const Modal = props => {
  
  const {
    title,
    children,
    primaryBtnText,
    secondaryBtnText,
    handlePrimaryBtnClick,
    handleSecondaryBtnClick
  } = props

  return (
    <RBModal
      show={ true }
      centered
    >
      <RBModal.Header closeButton>
        <RBModal.Title>{ title }</RBModal.Title>
      </RBModal.Header>
      <RBModal.Body>
        { children }
      </RBModal.Body>
      <RBModal.Footer>
        <Button variant="secondary" onClick={ handleSecondaryBtnClick }>{ secondaryBtnText }</Button>
        <Button variant="primary" onClick={ handlePrimaryBtnClick }>{ primaryBtnText }</Button>
      </RBModal.Footer>
    </RBModal>
  )
}

export default Modal