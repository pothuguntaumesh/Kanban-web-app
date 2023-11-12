import React from 'react'
import Task from './Task'

const Column = (props) => {
  // console.log("running the column component")
    
  return (
    <div className='flex flex-col gap-4   '>
        <div className='flex mt-2 mx-3 items-center gap-2  justify-start  w-80'>
            <div className='h-3 w-3 bg-violet-500 rounded-full'></div>
            <p className='text-dark-gray'>{props.status}</p>
        </div>
        
        {props.board[props.status].map((task,index)=> <Task taskIndex={index} statusColumn={props.status} showTaskDetails={props.showTaskDetails} taskDetails={task}/>)}
    </div>
  )
}

export default Column
