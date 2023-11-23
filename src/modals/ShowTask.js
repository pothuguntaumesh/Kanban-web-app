import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import SubTaskInsideTaskModal from '../components/SubTaskInsideTaskModal'
import { useDispatch, useSelector } from 'react-redux'
import { boardActions } from '../store'

const Backdrop=(props)=>{
    return <div onClick={props.hideShowTaskModal} className='fixed h-screen bg-light-gray w-full z-10 opacity-60'></div>
}

const ShowTaskModal = (props) => {
  console.log("Inside showtask modal",props.taskDetails)

  const dispatch=useDispatch();
  const currentBoard=useSelector(state=>state.currentBoard)
  const statusValues=useSelector(state=>Object.keys(state[currentBoard]))
  const board=useSelector(state=>state[currentBoard]);

  const currentSubTasks=board[props.taskDetails["curStatusColumn"]][props.taskDetails.taskIndex]["subtasks"]
  const countOfSubtasks=currentSubTasks.length
  const completedSubTasks=currentSubTasks.filter(task=>task.isCompleted===true).length
  const [showDeleteTaskModal,setShowDeleteTaskModal]=useState(false)
  const showTaskDotsHandler=()=>{
    setShowDeleteTaskModal(!showDeleteTaskModal)
  }
  const editTaskHandler=()=>{
    setShowDeleteTaskModal(false)
    props.editTaskModalHandler(props.taskDetails)
  }
  const deleteTaskHandler=()=>{

    
    const title="Delete this task?"
    const desc=`Are you sure you want to delete the "${props.taskDetails.title}" task and its subtasks? This action cannot be reversed.`
    const type="DELETE_TASK"
    props.showDeleteModalHandler({title:title,desc:desc,type:type,taskDetails:props.taskDetails})
    props.hideShowTaskModal()
  }
  const dropDownHandler=(event)=>{
    const actionObject={...props.taskDetails,"changeStatusTo":event.target.value}
    dispatch(boardActions.changeStatusOfTask(actionObject))
    props.hideShowTaskModal()
  }
    
  return (
    <div className='dark:bg-dark-brown absolute bg-white top-2/4 left-2/4 -translate-x-1/2 -translate-y-1/2 min-h-3/5  w-96 text-light-black rounded-md z-20'>
      <div className='container  my-4 flex flex-col w-board mx-auto'>
        <div className='flex text-light-black capitalize items-center justify-between py-2'>
          <h2 className='dark:text-white'>{props.taskDetails.title}</h2>
          <div onClick={showTaskDotsHandler} className=' px-2 py-2'>
            <svg  width="5" height="20" xmlns="http://www.w3.org/2000/svg"><g fill="#828FA3" fill-rule="evenodd"><circle cx="2.308" cy="2.308" r="2.308"/><circle cx="2.308" cy="10" r="2.308"/><circle cx="2.308" cy="17.692" r="2.308"/></g></svg>
          </div>
          {showDeleteTaskModal && 
          <div className='dark:bg-dark-brown bg-white h-16 w-28 fixed -right-8 top-16 flex flex-col gap-2 px-3 rounded-md py-2'>
            <p onClick={editTaskHandler}  className='text-dark-gray cursor-pointer'>Edit Task</p>
            <p onClick={(e)=>{e.stopPropagation() 
            deleteTaskHandler() }} className='dark:text-dark-red text-light-red cursor-pointer'>Delete Task</p>
          </div>}
        </div>
        <p className='text-dark-gray capitalize' >{props.taskDetails.description}</p>
        <div className='flex flex-col gap-2'>
          <p className='dark:text-white mb-2 text-dark-gray mt-2 font-bold' >Subtasks ({completedSubTasks } of {countOfSubtasks}) </p>
          {props.taskDetails.subtasks.map((subtask,index)=>{
          return <SubTaskInsideTaskModal toggleSubTaskStatus={props.toggleSubTaskStatus} key={Math.random()} taskDetails={props.taskDetails} subtaskIndex={index} subtaskTitle={subtask.title}/>})}
        </div>
        <div className='mb-4'>
          <p className='text-dark-gray mt-4'>Current Status</p>
        <select value={props.taskDetails.curStatusColumn} onChange={dropDownHandler} className='dark:bg-dark-brown dark:border-light-brown dark:text-white px-2 h-10 w-full text-sm text-light-black mt-2 border border-light-gray rounded-md'>
          {statusValues.map(statusValue=><option key={statusValue} value={statusValue}>{statusValue}</option>)}
        </select>
        </div>
      </div>
    </div>
  )
  
}

const ShowTask = (props) => {
  return (
    <>
    {ReactDOM.createPortal(<Backdrop hideShowTaskModal={props.hideShowTaskModal} />,document.getElementById('backdrop'))}
    {ReactDOM.createPortal(<ShowTaskModal  toggleSubTaskStatus={props.toggleSubTaskStatus} hideShowTaskModal={props.hideShowTaskModal} showDeleteModalHandler={props.showDeleteModalHandler} editTaskModalHandler={props.editTaskModalHandler} taskDetails={props.taskDetails}/>,document.getElementById('overlay'))}
    </>
)
}

export default ShowTask
