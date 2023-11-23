import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { boardActions } from '../store'

const SubTaskInsideTaskModal = (props) => {
  const currentBoard=useSelector(state=>state.currentBoard)
  const state=useSelector(state=>state)
  const subTasksStatus=state[currentBoard][props.taskDetails['curStatusColumn']][props.taskDetails.taskIndex]["subtasks"][props.subtaskIndex]["isCompleted"]
  const taskDetails={...props.taskDetails,"subtaskIndex":props.subtaskIndex}

  const subTaskClickedHandler=()=>{ 
    props.toggleSubTaskStatus(taskDetails)
  }
  
  return (
    <div onClick={subTaskClickedHandler} className='dark:bg-light-black flex gap-2 bg-light-white py-2 px-2 text-dark-gray capitalize rounded-sm'>
        <div className='flex gap-2'>
          <input  type='checkbox' defaultChecked={subTasksStatus===true}/> 
          <p className={subTasksStatus===true?'line-through ':"dark:text-white"}>{props.subtaskTitle}</p>
        </div>
        
  </div>
  )
}

export default SubTaskInsideTaskModal
