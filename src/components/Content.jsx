import React, { useState } from 'react';
import ModalContent from './ModalContent';

export const Content = () => {

  const [isModalOpen, setOpenModal] = useState(false);
  
  const openModal = () => {
    setOpenModal(true);
  }

  const closeModal = () => {
    setOpenModal(false);
  }

  return (
    <div className='contentWrapper'>
      <div className='buttonDiv'>
        <button className='button addButton' onClick={openModal}>Add task</button>
        <ModalContent isOpen={isModalOpen} closeModal={closeModal}/>
        <button className='button deleteAllButton'>Delete tasks</button>
        <button className='button deleteDoneButton'>Delete done tasks</button>
      </div>
      <div className="contentDiv">
        <h1>ToDoList</h1>
      </div>
    </div>
  )
}

export default Content
