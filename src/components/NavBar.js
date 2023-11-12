import React, { useState } from 'react'
import logoLight from '../assets/logo-dark.svg'
import verticalEllipsis from '../assets/icon-vertical-ellipsis.svg';
import { useSelector } from 'react-redux';
import DeleteModal from '../modals/DeleteModal';

const NavBar = (props) => {
  const currentBoard=useSelector(state=>state.currentBoard);
  const [showEditDeleteBoardOverlay ,setShowEditDeleteBoardOverlay] =useState(false)
  const onClickHandler=()=>{
    const title="Delete this board?"
    const desc=`Are you sure you want to delete the ${currentBoard} board? This action will remove all columns and tasks and cannot be reversed.`
    const type="DELETE_BOARD"
    props.showDeleteModalHandler(title,desc,type)
  }
return (
  <div className='flex h-nav items-center '>
    <div className='w-64 flex-shrink-0  border-r-2 ml-6 border-light-gray self-stretch items-center flex'>
      <img src={logoLight} alt='/' className='items-center'/>
    </div>
    <div className=' pl-4 flex-shrink-0'>
      <h1 className='capitalize'>{currentBoard}</h1>
    </div>
    <div className=' ml-auto flex gap-4 items-center mr-6'>
      <button onClick={props.showAddNewTaskModalHandler} className='rounded-full bg-dark-violet px-2 py-2 text-white'><p>+Add New Task</p></button>
      <img onClick={()=>{setShowEditDeleteBoardOverlay(!showEditDeleteBoardOverlay)}} className='cursor-pointer' src={verticalEllipsis} alt='/'/>
      {showEditDeleteBoardOverlay && 
      <div className=' w-40 bg-white h-20 absolute right-6 top-16 rounded-md'>
        <div onClick={()=>{
          props.showEditBoardModalHandler()
          setShowEditDeleteBoardOverlay(false)}} className='w-4/5 mx-auto  mt-4 text-dark-gray cursor-pointer'><p>Edit Board</p></div>
        <div className='w-4/5 mx-auto  mt-4 text-dark-red cursor-pointer'><p onClick={(e)=>{e.stopPropagation()
        onClickHandler()}}>Delete Board</p></div>

      </div>
      }
    </div>

  </div>
)
}

export default NavBar
