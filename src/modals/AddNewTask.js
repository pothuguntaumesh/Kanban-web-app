import React, { useState } from 'react'
import closeIcon from '../assets/icon-cross.svg';
import ReactDOM from 'react-dom'
import Subtask from '../components/Subtask';
import { useDispatch, useSelector } from 'react-redux';
import { boardActions } from '../store';

const Backdrop=(props)=>{
    return <div onClick={props.hideAddNewTaskModal} className='fixed h-screen bg-light-gray w-full z-10 opacity-60'></div>
}
let newTitle=null;
let newDescription=null;
const AddNewTaskModal=(props)=>{
    const currentBoard=useSelector(state=>state.currentBoard)
    const statusValues=useSelector(state=>Object.keys(state[currentBoard]))
    const dispatch=useDispatch()
    const [newSubtasks,setNewSubTasks]=useState([{title:"",isCompleted:false,id:Math.random()}])
    const [currentDropDownValue,setCurrentDropDownValue]=useState(statusValues[0])
    
    console.log(newSubtasks,"New subtasks on the top")
    const addNewSubTaskHandler=()=>{
        setNewSubTasks(newSubtasks=>[...newSubtasks,{title:"",isCompleted:false,id:Math.random()}])
    }
    const subTaskChangeHandler=(event,index)=>{
        setNewSubTasks(newSubtasks=>{
            return newSubtasks.map(subtask=>{
                if(subtask.id===index){
                    subtask.title=event.target.value
                }
                return subtask
            })

        })
    }
    const removeSubTask=(index)=>{
       setNewSubTasks(newSubtasks=>newSubtasks.filter(subtask=>subtask.id!==index))
    }
    const dropDownHandler=(event)=>{
        setCurrentDropDownValue(event.target.value)
    }
    const titleChangeHandler=(event)=>{
        newTitle=event.target.value
    }
    const descriptionChangeHandler=(event)=>{
        newDescription=event.target.value
    }
    
    const createNewTaskHandler=()=>{
        const newSubtasksCopy=newSubtasks.filter(subtask=>subtask.title.length>0)
        const createTaskPayload={newTitle,newDescription,newSubtasksCopy,currentDropDownValue}
        dispatch(boardActions.createNewTask(createTaskPayload))
        setNewSubTasks(newSubtasksCopy)
        props.hideAddNewTaskModal()
    }
    return (
        <div className='dark:bg-dark-brown absolute top-2/4 left-2/4 -translate-x-1/2 -translate-y-1/2 min-h-3/5 bg-white w-96 text-light-black rounded-md z-20'>
            <div className='container flex flex-col w-board mx-auto'>
                <h2 className='dark:text-white text-lg mt-6'>Add New Task</h2>
                <div className='flex flex-col mt-4'>
                    <p className='dark:text-white text-dark-gray'>Title</p>
                    <input onChange={titleChangeHandler} placeholder='e.g. Finish Kanban App' className='dark:bg-dark-brown dark:border-light-brown dark:text-light-gray placeholder:text-xs mt-1 border border-light-gray rounded-md h-10 text-sm px-2'/>
                </div>
                <div className='flex flex-col mt-4'>
                    <p className='dark:text-white text-dark-gray'>Description</p>
                    <textarea onChange={descriptionChangeHandler} placeholder='e.g. Add New Column Modal Next' className=' dark:bg-dark-brown dark:border-light-brown dark:text-light-gray placeholder:text-xs min-h-10 mt-1 border border-light-gray rounded-md  text-sm px-2 py-2'/>
                </div>
                <div className='flex flex-col mt-4'>
                    <p className='dark:text-white text-dark-gray'>Subtasks</p>
                    <div className='container'>
                        {newSubtasks.map(subTask => {
                            return <Subtask removeSubTask={removeSubTask} subTaskChangeHandler={subTaskChangeHandler} key={subTask.id} subTask={subTask.title} id={subTask.id}/>})}
                        <div onClick={addNewSubTaskHandler} className='dark:bg-white text-dark-violet text-sm bg-light-gray mt-2 py-2 rounded-full text-center'>+ Add New Task</div>
                    </div>
                </div>
                <div className='mt-4'>
                    <p className='dark:text-white'>Status</p>
                    <select  onChange={dropDownHandler} className='dark:bg-dark-brown dark:border-light-brown dark:text-light-gray px-2 h-10 w-full text-sm text-light-black mt-2 border border-light-gray rounded-md'>
                        {statusValues.map(statusValue=><option value={statusValue}>{statusValue}</option>)}
                    </select>
                </div>
                <div onClick={createNewTaskHandler} className='bg-dark-violet text-sm text-center text-white rounded-full py-2 mt-4 mb-8'><p>Create Task</p></div>
    
            </div>
        </div>
      )

}
const AddNewTask = (props) => {
    return (
        <>
        {ReactDOM.createPortal(<Backdrop hideAddNewTaskModal={props.hideAddNewTaskModal}/>,document.getElementById('backdrop'))}
        {ReactDOM.createPortal(<AddNewTaskModal hideAddNewTaskModal={props.hideAddNewTaskModal}/>,document.getElementById('overlay'))}
        </>
    )
  
}

export default AddNewTask
