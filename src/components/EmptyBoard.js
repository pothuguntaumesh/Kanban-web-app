import React from 'react'

const EmptyBoard = () => {
  return (
    <div>
      <p>This board is empty. Create a new column to get started.</p>
      <div className='text-white bg-dark-violet px-2 py-2 rounded-full'>+Add New Column</div>
    </div>
  )
}

export default EmptyBoard
