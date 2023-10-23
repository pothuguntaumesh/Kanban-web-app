import React from 'react'

const EmptyBoard = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <p className='text-dark-gray'>This board is empty. Create a new column to get started.</p>
      <div className='cursor-pointer w-3/5 text-white bg-dark-violet px-2 py-2 rounded-full mt-4'>+Add New Column</div>
    </div>
  )
}

export default EmptyBoard
