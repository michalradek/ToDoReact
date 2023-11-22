import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const CustomStyles = {

  content: {
    backgroundColor: 'grey',
    border: 'none',
  },
  overlay: {
    backgroundColor: 'transparent',
  }
}
export const ModalContent = ({isOpen, closeModal}) => {
  return (  
    <Modal isOpen={isOpen} onRequestClose={closeModal} style={CustomStyles}>
      <div className='modalDivContent'> 
        <input placeholder='Write your task here' type='text' className="modalInput"></input>
        <div className='modalButtonDiv'>
          <button className='modalButton'>Save</button>
          <button onClick={closeModal} className='modalButton'>Close</button>
        </div>
      </div>
    </Modal>
  )
}

export default ModalContent
