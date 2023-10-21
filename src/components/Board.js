import React from 'react'
import EmptyBoard from './EmptyBoard'

const Board = () => {
    //If the board is empty show the text that the board is empty
  return (
    <div className='flex-grow bg-light-white text-center overflow-auto'>
         
        <div className='flex items-center justify-center bg-yellow-300'>
            <EmptyBoard/>
        </div>
        
    </div>
  )
}

export default Board
