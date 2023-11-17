import React from 'react'

export const Content = () => {
  return (
    <div className='contentWrapper'>
        <div className='buttonDiv'>
            <button className='button addButton'>Add task</button>
            <button className='button deleteAllButton'>Delete tasks</button>
            <button className='button deleteDoneButton'>Delete done tasks</button>
        </div>
    </div>
  )
}

export default Content
