import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { boardActions } from '../store'

const SubTaskInsideTaskModal = (props) => {
  const currentBoard=useSelector(state=>state.currentBoard)
  const state=useSelector(state=>state)
  console.log(props.taskDetails)
  const subTasksStatus=state[currentBoard][props.taskDetails['curStatusColumn']][props.taskDetails.taskIndex]["subtasks"][props.subtaskIndex]["isCompleted"]

  const dispatch=useDispatch()
  // console.log(props.taskDetails,"Task Details inside subtask component")
  // console.log(props.subtaskIndex)
  const taskDetails={...props.taskDetails,"subtaskIndex":props.subtaskIndex}


  
  const subTaskClickedHandler=()=>{ 
    //Here I've get the current Board, current Column, currentSubtask Index 
    // console.log(currentBoard)
    // dispatch(boardActions.toggleSubTasks(taskDetails))
    props.toggleSubTaskStatus(taskDetails)
    //Then close the modal 

  }
  
  return (
    <div onClick={subTaskClickedHandler} className='flex gap-2 bg-light-white py-2 px-2 text-dark-gray capitalize rounded-sm'>
        <div className='flex gap-2'>
          <input  type='checkbox' checked={subTasksStatus===true}/> 
          <p className={subTasksStatus===true?'line-through':undefined}>{props.subtaskTitle}</p>
        </div>
        
  </div>
  )
}

export default SubTaskInsideTaskModal
