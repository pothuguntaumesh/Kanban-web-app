import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Subtask from '../components/Subtask'
import { useDispatch, useSelector } from 'react-redux'
import { boardActions } from '../store'

const Backdrop=(props)=>{
    return <div onClick={props.hideEditTaskModalHandler} className='fixed h-screen bg-light-gray w-full z-10 opacity-60'></div>
}

const EditTaskModal=(props)=>{
    console.log("running this editTaskModal")
    const dispatch=useDispatch();

    const currentBoard=useSelector(state=>state.currentBoard)
    const statusValues=useSelector(state=>Object.keys(state[currentBoard]))
    // console.log(props.taskDetails,"Inside edit task ")
    const [updatedDetails,setUpdatedDetails]=useState({updatedTitle:props.taskDetails.title,updatedDescription:props.taskDetails.description,updatedSubtasks:props.taskDetails.subtasks,oldTaskStatus:props.taskDetails.curStatusColumn,updatedTaskStatus:props.taskDetails.curStatusColumn,taskIndex:props.taskDetails.taskIndex});
    console.log(updatedDetails,"updateDetails before chaning on the top")
    const [curStatusValue,setCurStatusValue]=useState(props.taskDetails.curStatusColumn)
    const [subtasks,setsubtasks]=useState(props.taskDetails.subtasks)

    console.log(subtasks,"subtasks on the top")
    const titleOnChangeHandler=(event)=>{
        const updatedTitle=event.target.value
        updatedDetails["updatedTitle"]=updatedTitle
        setUpdatedDetails(updatedDetails)
        // console.log(updatedDetails,"Updated details inside titleOnChangeHandler")
    }
    const descriptionOnChangeHandler=(event)=>{
        const updatedDescription=event.target.value
        updatedDetails["updatedDescription"]=updatedDescription
        setUpdatedDetails(updatedDetails)
        // console.log(updatedDetails)
    }
    const dropDownHandler=(event)=>{
        setCurStatusValue(event.target.value)
        updatedDetails["updatedTaskStatus"]=event.target.value
        setUpdatedDetails(updatedDetails)
    
        // console.log(updatedDetails)
    }
    const removeSubTask=(id)=>{
        console.log("Clicked on remove subtask",id)
        // console.log(id,"inside the remove sub task function")
        console.log(subtasks,"Inside remove sub task {subtasks before everything}")
        const subtasksTemp=subtasks.filter((subtask)=>subtask.id!==id)
        console.log(subtasksTemp,"Inside the remove sub task")
        setsubtasks(subtasksTemp)
        updatedDetails["updatedSubtasks"]=subtasks
        setUpdatedDetails(updatedDetails)
        // console.log(updatedDetails,"Inside remove subTasks")
    }
    const addNewSubTaskHandler=()=>{
        const newEmptySubTask={title:"",isCompleted:false,id:Math.random()}
        const addedEmptySubTask=[...subtasks,newEmptySubTask]
        setsubtasks(addedEmptySubTask)
        console.log(addedEmptySubTask,"Subtasks Inside the add New sub task handler")
    }
    const onSaveChangesHandler=()=>{
        console.log(updatedDetails,"Inside onSaveChangesHandler")
        console.log(subtasks," Before Subtasks copy inside on save changes handler")
        const subtasksCopy=subtasks.filter(subtask=>subtask.title.length>0)
        console.log(subtasksCopy,"Subtasks copy inside on save changes handler")
        // console.log(subtasks,"After updating the subtasks")
        updatedDetails["updatedSubtasks"]=subtasksCopy
        dispatch(boardActions.saveEditedTask(updatedDetails))
        setsubtasks(subtasksCopy)
        props.hideEditTaskModalHandler()
    }
    const setSubTaskHandler=(event,id)=>{
        const subtaskCopy=subtasks.map((subTask)=>{
            if(subTask.id===id){
                return {...subTask,title:event.target.value}
            }
            return subTask;
        })
        setsubtasks(subtaskCopy)
    }

    return (
        <div className=' absolute top-2/4 left-2/4 -translate-x-1/2 -translate-y-1/2 min-h-3/5 bg-white w-96 text-light-black rounded-md z-20'>
            <div className='container flex flex-col w-board mx-auto'>
                <h2 className='text-lg mt-6'>Edit Task</h2>
                <div className='flex flex-col mt-4'>
                    <p className='text-dark-gray'>Title</p>
                    <input onChange={titleOnChangeHandler} placeholder='e.g. Finish Kanban App' defaultValue={props.taskDetails.title} className='placeholder:text-xs mt-1 border border-light-gray rounded-md h-10 text-sm px-2 capitalize'/>
                </div>
                <div className='flex flex-col mt-4'>
                    <p className='text-dark-gray'>Description</p>
                    <textarea onChange={descriptionOnChangeHandler} defaultValue={props.taskDetails.description} placeholder='e.g. Add New Column Modal Next' className='placeholder:text-xs min-h-10 mt-1 border border-light-gray rounded-md  text-sm px-2 py-2'/>
                </div>
                <div className='flex flex-col mt-4'>
                    <p className='text-dark-gray'>Subtasks</p>
                    <div className='container'>
                        {subtasks.map(subTask => {
                            console.log(subTask,"Subtask inside map function")
                            return <Subtask key={subTask.id} setSubTask={setSubTaskHandler} removeSubTask={removeSubTask} id={subTask.id} subTask={subTask.title}  />})}
                        <div onClick={addNewSubTaskHandler} className='text-dark-violet text-sm bg-light-gray mt-2 py-2 rounded-full text-center'>+ Add New Subtask</div>
                    </div>
                </div>
                <div className='mt-4'>
                    <p>Status</p>
                    <select value={curStatusValue} onChange={dropDownHandler} className='px-2 h-10 w-full text-sm text-light-black mt-2 border border-light-gray rounded-md'>
                    {statusValues.map(statusValue=><option value={statusValue}>{statusValue}</option>)}
                    </select>
                    {/* <select className='px-2 h-10 w-full text-sm text-light-black mt-2 border border-light-gray rounded-md'>
                        <option value="todo">Todo</option>
                        <option value="doing">Doing</option>
                        <option value="completed">Completed</option>
                    </select> */}
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
