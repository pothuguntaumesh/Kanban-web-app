import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Subtask from '../components/Subtask'
import { useDispatch, useSelector } from 'react-redux'
import { boardActions } from '../store'

const Backdrop=(props)=>{
    return <div onClick={props.hideEditTaskModalHandler} className='fixed h-screen bg-light-gray w-full z-10 opacity-60'></div>
}

const EditTaskModal=(props)=>{
    const dispatch=useDispatch();
    const currentBoard=useSelector(state=>state.currentBoard)
    const statusValues=useSelector(state=>Object.keys(state[currentBoard]))
    const [updatedDetails,setUpdatedDetails]=useState({updatedTitle:props.taskDetails.title,updatedDescription:props.taskDetails.description,updatedSubtasks:props.taskDetails.subtasks,oldTaskStatus:props.taskDetails.curStatusColumn,updatedTaskStatus:props.taskDetails.curStatusColumn,taskIndex:props.taskDetails.taskIndex});
    const [curStatusValue,setCurStatusValue]=useState(props.taskDetails.curStatusColumn)
    const [subtasks,setsubtasks]=useState(props.taskDetails.subtasks)


    const titleOnChangeHandler=(event)=>{
        const updatedTitle=event.target.value
        updatedDetails["updatedTitle"]=updatedTitle
        setUpdatedDetails(updatedDetails)
    }
    const descriptionOnChangeHandler=(event)=>{
        const updatedDescription=event.target.value
        updatedDetails["updatedDescription"]=updatedDescription
        setUpdatedDetails(updatedDetails)
    }
    const dropDownHandler=(event)=>{
        setCurStatusValue(event.target.value)
        updatedDetails["updatedTaskStatus"]=event.target.value
        setUpdatedDetails(updatedDetails)
    
    }
    const removeSubTask=(id)=>{
        const subtasksTemp=subtasks.filter((subtask)=>subtask.id!==id)
        setsubtasks(subtasksTemp)
        updatedDetails["updatedSubtasks"]=subtasks
        setUpdatedDetails(updatedDetails)

    }
    const addNewSubTaskHandler=()=>{
        const newEmptySubTask={title:"",isCompleted:false,id:Math.random()}
        const addedEmptySubTask=[...subtasks,newEmptySubTask]
        setsubtasks(addedEmptySubTask)

    }
    const onSaveChangesHandler=()=>{
        
        const subtasksCopy=subtasks.filter(subtask=>subtask.title.length>0)
        updatedDetails["updatedSubtasks"]=subtasksCopy
        dispatch(boardActions.saveEditedTask(updatedDetails))
        setsubtasks(subtasksCopy)
        props.hideEditTaskModalHandler()
    }
    const subTaskChangeHandler=(event,id)=>{
        const subtaskCopy=subtasks.map((subTask)=>{
            if(subTask.id===id){
                return {...subTask,title:event.target.value}
            }
            return subTask;
        })
        setsubtasks(subtaskCopy)
    }

    return (
        <div className='dark:bg-dark-brown absolute top-2/4 left-2/4 -translate-x-1/2 -translate-y-1/2 min-h-3/5 bg-white w-96 text-light-black rounded-md z-20'>
            <div className='container flex flex-col w-board mx-auto'>
                <h2 className='dark:text-white text-lg mt-6'>Edit Task</h2>
                <div className='flex flex-col mt-4'>
                    <p className='dark:text-white text-dark-gray'>Title</p>
                    <input onChange={titleOnChangeHandler} placeholder='e.g. Finish Kanban App' defaultValue={props.taskDetails.title} className='dark:bg-dark-brown dark:text-light-gray dark:border-light-brown placeholder:text-xs mt-1 border border-light-gray rounded-md h-10 text-sm px-2 capitalize'/>
                </div>
                <div className='flex flex-col mt-4'>
                    <p className='dark:text-white text-dark-gray'>Description</p>
                    <textarea onChange={descriptionOnChangeHandler} defaultValue={props.taskDetails.description} placeholder='e.g. Add New Column Modal Next' className='dark:bg-dark-brown dark:text-light-gray dark:border-light-brown placeholder:text-xs min-h-10 mt-1 border border-light-gray rounded-md  text-sm px-2 py-2'/>
                </div>
                <div className='flex flex-col mt-4'>
                    <p className='text-dark-gray'>Subtasks</p>
                    <div className='container'>
                        {subtasks.map(subTask => {
                            return <Subtask key={subTask.id} subTaskChangeHandler={subTaskChangeHandler} removeSubTask={removeSubTask} id={subTask.id} subTask={subTask.title}/>})}
                        <div onClick={addNewSubTaskHandler} className='dark:bg-white text-dark-violet text-sm bg-light-gray mt-2 py-2 rounded-full text-center'>+ Add New Subtask</div>
                    </div>
                </div>
                <div className='mt-4'>
                    <p className='dark:text-white'>Status</p>
                    <select value={curStatusValue} onChange={dropDownHandler} className='dark:bg-dark-brown dark:border-light-brown dark:text-light-gray px-2 h-10 w-full text-sm text-light-black mt-2 border border-light-gray rounded-md'>
                    {statusValues.map(statusValue=><option key={statusValue} value={statusValue}>{statusValue}</option>)}
                    </select>
                </div>
                <div onClick={onSaveChangesHandler} className='bg-dark-violet text-sm text-center text-white rounded-full py-2 mt-4 mb-8 cursor-pointer'><p>Save Changes</p></div>
    
            </div>
        </div>
      )
    
}
const EditTask = (props) => {
  return (
    <>
    {ReactDOM.createPortal(<Backdrop hideEditTaskModalHandler={props.hideEditTaskModalHandler} />,document.getElementById('backdrop'))}
    {ReactDOM.createPortal(<EditTaskModal hideEditTaskModalHandler={props.hideEditTaskModalHandler} taskDetails={props.taskDetails}/>,document.getElementById('overlay'))}
    </>
  )
}

export default EditTask
