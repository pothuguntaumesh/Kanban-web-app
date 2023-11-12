import React from 'react'
import ReactDOM from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { boardActions } from '../store';

const Backdrop=(props)=>{
    return <div onClick={props.hideDeleteModalHandler} className='fixed h-screen bg-light-gray w-full z-10 opacity-60'></div>
}

const ShowDeleteModal = (props) => {
    // console.log("Inside show Delete Modal")
    // console.log(props.title,props.desc,props.type)
    const board=useSelector(state=>state.currentBoard);
    const state=useSelector(state=>state)
    const dispatch=useDispatch()
    const modalDeleteHandler=()=>{

        // console.log("Clicked on delete button")
        console.log(props.taskDetails,"modalDeleteHandler")
        dispatch(boardActions.deleteTask({...props.taskDetails}))
        console.log(state[board][props.taskDetails.curStatusColumn][props.taskDetails.taskIndex])
        props.hideDeleteModalHandler()
    }
    const modalHideHandler=()=>{
        props.hideDeleteModalHandler()
    }
  return (
    <div className=' absolute top-2/4 left-2/4 -translate-x-1/2 -translate-y-1/2 min-h-3/5 bg-white w-96 text-light-black rounded-md z-20'>
            <div className='container flex flex-col w-board mx-auto'>
                <h3 className='text-dark-red text-lg mt-6 mb-4'>{props.title} </h3>
                <p className='text-xs text-dark-gray'>{props.desc}</p>
                <div className='flex gap-4 mb-8 mt-4'>
                    <div onClick={modalDeleteHandler} className='bg-dark-red cursor-pointer rounded-full px-16 py-3'><p className='text-white'>Delete</p></div>
                    <div onClick={modalHideHandler} className='bg-light-gray cursor-pointer rounded-full px-16 py-3'><p className='text-dark-violet'>Cancel</p></div>
                </div>
            </div>
    </div>
  )
}
const DeleteModal=(props)=>{
    console.log(props.title,"inside delete modal")
    return (
        <>
        {ReactDOM.createPortal(<Backdrop  hideDeleteModalHandler={props.hideDeleteModalHandler}/>,document.getElementById('backdrop'))}
        {ReactDOM.createPortal(<ShowDeleteModal taskDetails={props.taskDetails} hideDeleteModalHandler={props.hideDeleteModalHandler} title={props.title} desc={props.desc} type={props.type}/>,document.getElementById('overlay'))}
        </>
    )
}

export default DeleteModal
