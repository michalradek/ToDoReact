import React, { useState } from 'react';
import ModalContent from './ModalContent';

export const Content = () => {

  const [isModalOpen, setOpenModal] = useState(false);
  const [taskList, setTaskList] = useState([]);

  const printList = () => {
    taskList.push("test");
    console.log(taskList);
  }

  printList();
  const openModal = () => {
    setOpenModal(true);
  }

  const closeModal = () => {
    setOpenModal(false);
  }

  const handleSave = (tekst) => {
    console.log(tekst);
  }
  return (
    <div className='contentWrapper'>
      <div className='buttonDiv'>
        <button className='button addButton' onClick={openModal}>Add task</button>
        <ModalContent isOpen={isModalOpen} closeModal={closeModal} onSave={handleSave}/>
        <button className='button deleteAllButton'>Delete tasks</button>
        <button className='button deleteDoneButton'>Delete done tasks</button>
      </div>
      <div className="contentDiv">
      </div>
    </div>
  )
}

export default Content
