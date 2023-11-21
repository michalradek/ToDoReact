import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const CustomStyles = {
  overlay: {
    backgroundColor: 'transparent',
  }
}
export const ModalContent = ({isOpen, closeModal}) => {
  return (  
    <Modal isOpen={isOpen} onRequestClose={closeModal} style={CustomStyles}>
      <div>
        <h1>123123123</h1>
        <button onClick={closeModal}>Close</button>
      </div>
    </Modal>
  )
}

export default ModalContent
