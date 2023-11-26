import React, { useState } from 'react';
import ModalContent from './ModalContent';

export const Content = () => {

  const [isModalOpen, setOpenModal] = useState(false);
  const [taskList, setTaskList] = useState([]);

  const openModal = () => {
    setOpenModal(true);
  }

  const closeModal = () => {
    setOpenModal(false);
  }

  const handleSave = (tekst) => {
    setTaskList([...taskList, tekst]);
    
  }

  const deleteAllTasks = () => {
    setTaskList([]);
  }

  return (
    <div className='contentWrapper'>
      <div className='buttonDiv'>
        <button className='button addButton' onClick={openModal}>Add task</button>
        <ModalContent isOpen={isModalOpen} closeModal={closeModal} onSave={handleSave}/>
        <button className='button deleteAllButton' onClick={deleteAllTasks}>Delete tasks</button>
        <button className='button deleteDoneButton'>Delete done tasks</button>
      </div>
      <div className="contentDiv">
        {taskList.map((element, index) => {
          return (
            <div key={index} className='listDiv'>
              <input type="checkbox" id="contentDivInput"></input>
              <label For="contentDivInput" className='inputLabel'>{element}</label>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Content
