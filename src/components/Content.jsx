import React, { useState } from 'react';
import Modal from './Modal';

export const Content = () => {

  const [openModal, setOpenModal] = useState(false)
  const [taskList, setTaskList] = useState([]);
  const [uniqueId, setuniqueId] = useState(0);

  const handleSave = (tekst) => {
    setTaskList([...taskList, {text: tekst, done: false}]);
    setuniqueId(uniqueId + 1);
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
      <Modal open={openModal}/>
      <div className='buttonDiv'>
        <button className='button addButton' onClick={() => setOpenModal(true)}>Add task</button>
        <button className='button deleteAllButton' onClick={deleteAllTasks}>Delete tasks</button>
        <button className='button deleteDoneButton' onClick={deleteDoneTasks}>Delete done tasks</button>
      </div>
      <div className="contentDiv">
        {taskList.map((element, index) => {
          return (
            <div key={index} className='listDiv'>
              <input type="checkbox" id={index} className="contentDivInput"
              checked={element.done} onChange={() => toggleTaskDone(index)}></input>
              <label htmlFor={index} className='inputLabel'>{element.text}</label>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Content
