import React from 'react'

const Task = (props) => {
  

  const showTaskDetailsHandler=()=>{
    const taskDetailsWithStatusColumn={...props.taskDetails,"curStatusColumn":props.statusColumn,"taskIndex":props.taskIndex}
    props.showTaskDetails(taskDetailsWithStatusColumn)
  }
  const subtasksCount=props.taskDetails.subtasks.length
   
  return (
    <div onClick={showTaskDetailsHandler} className='dark:bg-dark-brown dark:border-dark-brown bg-white min-h-22 w-80 mx-2 border  rounded-md shadow-md text-start '>
      <div className='container flex flex-col px-4 py-4'>
        <h3 className='dark:text-white capitalize'>{props.taskDetails.title} </h3>
        <p className='text-dark-gray mt-4'>{props.taskDetails.subtasks.filter(task=>{
          return task.isCompleted===true}).length} of {subtasksCount} subtasks</p>
      </div>
    </div>
  )
}

export default Task
