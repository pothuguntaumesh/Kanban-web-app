import React from 'react'

const NullBoard = (props) => {
  return (
    <div className='flex dark:bg-dark-black items-center flex-col justify-center h-full'>
        <p className='text-dark-gray text-lg'>There are no boards available. Create a new board to get started</p>
        <div onClick={()=>{props.showCreateBoardModalHandler()}}  className=' text-center cursor-pointer w-1/5 text-white bg-dark-violet px-2 py-2 rounded-full mt-4'>+Add New Board</div>
    </div>
  )
}

export default NullBoard
