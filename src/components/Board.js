import React from 'react'
import EmptyBoard from './EmptyBoard'
import { useSelector } from 'react-redux'

import Column from './Column';



const Board = (props) => {

    const currentBoard=useSelector(state=>state.currentBoard)
    // console.log("CurrentBoard",currentBoard)
    const board=useSelector(state=>state[currentBoard]);
    console.log(board,"Inside the board right now")
    const currentBoardLength=Object.keys(board).length
    // console.log(currentBoardLength,"length")
    // console.log(initialState)
    const statusValues=Object.keys(board)
    // console.log("running the board component")
    //statusValues will have todo, doing and done for now


    //This has arrays now I want to loop through those arrays
    

    //important code
    
    // statusValues.forEach(statusValue=>{
    //     board[statusValue].map(arr=>{
        
    //     const taskKeys=Object.keys(arr)
    //     taskKeys.forEach(taskKey=>console.log(arr[taskKey]))
        
    // })})

    // board[statusValue].map(arr=><StatusBoard task={arr}/>)})

  return (
    <div className='flex-grow bg-light-white text-center overflow-x-auto  overflow-auto flex'>
        {currentBoardLength<=0 && <EmptyBoard showEditBoardModalHandler={props.showEditBoardModalHandler}/>}

        {currentBoardLength>0 && <div className='flex justify-start '>
                {statusValues.map(status=>{
                    return <Column showTaskDetails={props.showTaskDetails} status={status} board={board}/>
                })}
                
        </div>}
    
        {currentBoardLength>0 &&<div onClick={props.showEditBoardModalHandler} className='mt-9 mb-2 mx-4 text-dark-gray min-w-14 flex items-center  justify-center h-full bg-light-gray  rounded-md shadow-md'>
            <p className='text-lg'>+ New Column</p>
        </div>}
        
    </div>
  )
}

export default Board
