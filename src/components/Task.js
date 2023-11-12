import React from 'react'

const Task = (props) => {
  
  // console.log("Running the task component")
  // console.log(props.taskDetails)
  // console.log(props.taskDetails.subtasks)
  
  const showTaskDetailsHandler=()=>{
    const taskDetailsWithStatusColumn={...props.taskDetails,"curStatusColumn":props.statusColumn,"taskIndex":props.taskIndex}
    // console.log(taskDetailsWithStatusColumn, "Inside the task component")
    props.showTaskDetails(taskDetailsWithStatusColumn)
  }
  const subtasksCount=props.taskDetails.subtasks.length
   
  return (
    <div onClick={showTaskDetailsHandler}  className='bg-white min-h-22 w-80 mx-2 border  rounded-md shadow-md text-start '>
      <div className='container flex flex-col px-4 py-4'>
        <h3 className='capitalize'>{props.taskDetails.title} </h3>
        <p className='text-dark-gray mt-4'>{props.taskDetails.subtasks.filter(task=>{
          return task.isCompleted===true}).length} of {subtasksCount} subtasks</p>
      </div>
    </div>
  )
}

export default Task
