import React from 'react'
import EmptyBoard from './EmptyBoard'
import { useSelector } from 'react-redux'

import Column from './Column';



const Board = (props) => {

    const currentBoard=useSelector(state=>state.currentBoard)

    const board=useSelector(state=>state[currentBoard]);

    const currentBoardLength=Object.keys(board).length


    const statusValues=Object.keys(board)


  return (
    <div className='dark:bg-light-black flex-grow bg-light-white text-center overflow-x-auto  overflow-auto flex'>
        {currentBoardLength<=0 && <EmptyBoard showEditBoardModalHandler={props.showEditBoardModalHandler}/>}

        {currentBoardLength>0 && <div className='flex justify-start '>
                {statusValues.map(status=>{
                    return <Column key={status} showTaskDetails={props.showTaskDetails} status={status} board={board}/>
                })}
                
        </div>}
    
        {currentBoardLength>0 &&<div onClick={props.showEditBoardModalHandler} className='dark:bg-dark-brown mt-9 mb-2 mx-4 text-dark-gray min-w-14 flex items-center  justify-center h-full bg-light-gray  rounded-md shadow-md'>
            <p className='text-lg'>+ New Column</p>
        </div>}
        
    </div>
  )
}

export default Board
