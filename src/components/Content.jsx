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
    setTaskList([...taskList, {text: tekst, done: false}]);
    console.log(taskList);
  }

  const deleteAllTasks = () => {
    setTaskList([]);
  }

  const deleteDoneTasks = () => {
    const newTaskList = taskList.filter(task => !task.done);
    setTaskList(newTaskList);
 }

 const toggleTaskDone = (index) => {
    const newTaskList = [...taskList];
    newTaskList[index].done = !newTaskList[index].done;
    setTaskList(newTaskList);
 }

  return (
    <div className='contentWrapper'>
      <div className='buttonDiv'>
        <button className='button addButton' onClick={openModal}>Add task</button>
        <ModalContent isOpen={isModalOpen} closeModal={closeModal} onSave={handleSave}/>
        <button className='button deleteAllButton' onClick={deleteAllTasks}>Delete tasks</button>
        <button className='button deleteDoneButton' onClick={deleteDoneTasks}>Delete done tasks</button>
      </div>
      <div className="contentDiv">
        {taskList.map((element, index) => {
          return (
            <div key={index} className='listDiv'>
              <input type="checkbox" id="contentDivInput" className="contentDivInput"
              checked={element.done} onChange={() => toggleTaskDone(index)}></input>
              <label htmlFor="contentDivInput" className='inputLabel'>{element.text}</label>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Content
