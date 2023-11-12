import React, { useState } from 'react'
import NewBoardColumn from '../components/NewBoardColumn';
import ReactDOM from 'react-dom'
import { useSelector } from 'react-redux';


const Backdrop=(props)=>{
    return <div onClick={props.hideEditBoardModalHandler} className='fixed h-screen bg-light-gray w-full z-10 opacity-60'></div>
}

const ShowEditBoardModal=()=>{
    console.log("Running edit board modal")
    const currentBoard=useSelector(state=>state.currentBoard);
    const [newBoardName,setNewBoardName]=useState(currentBoard);
    
    
    return (
        <div className='absolute bg-white top-2/4 left-2/4 -translate-x-1/2 -translate-y-1/2 min-h-3/5  w-96 text-light-black rounded-md z-20'>
          <div className='container  my-4 flex flex-col w-board mx-auto'>
          <div className='flex flex-col mt-4'>
            <h2>Edit Board</h2>
            <p className='text-dark-gray'>Name</p>
            <input  value={newBoardName} defaultValue={currentBoard} placeholder='e.g. Web Design' className='placeholder:text-xs mt-1 border border-light-gray rounded-md h-10 text-sm px-2'/>
            </div>
          </div>
          <div className='flex flex-col mt-4 mx-auto w-board'>
            <p className='text-dark-gray'>Columns</p>
            <div className='container my-4 flex flex-col'>
                {statusValues.map(statusValue=><NewBoardColumn/>)}
                <div  className='text-dark-violet text-sm bg-light-gray my-4 py-2 rounded-full text-center cursor-pointer'>+ Add New Column</div>
                <div className='text-white text-sm bg-dark-violet  py-2 rounded-full text-center cursor-pointer'>Save Changes</div>
            </div>
                </div>
        </div>
      )

}

const EditBoard = (props) => {
  return (
    <>
    {ReactDOM.createPortal(<Backdrop hideEditBoardModalHandler={props.hideEditBoardModalHandler} />,document.getElementById('backdrop'))}
    {ReactDOM.createPortal(<ShowEditBoardModal />,document.getElementById('overlay'))}
    </>
  )
}

export default EditBoard
