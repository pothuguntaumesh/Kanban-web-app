import React from 'react'

const EmptyBoard = (props) => {
  return (
    <div className='h-full w-full  flex flex-col justify-center items-center'>
      <p className='text-dark-gray text-sm'>This board is empty. Create a new column to get started.</p>
      <div onClick={()=>{props.showEditBoardModalHandler()}}  className='cursor-pointer w-1/5 text-white bg-dark-violet px-2 py-2 rounded-full mt-4'>+Add New Column</div>
    </div>
  )
}

export default EmptyBoard
