import React from 'react'
import EmptyBoard from './EmptyBoard'
import { useSelector } from 'react-redux'


const Board = () => {
    const board=useSelector(state=>state.platformLaunch);
    // console.log(initialState)
    const statusValues=Object.keys(board)
    //This has arrays now I want to loop through those arrays
    statusValues.forEach(statusValue=>{
        console.log(statusValue)
        board[statusValue].map(arr=>{
            
            const taskKeys=Object.keys(arr)
            taskKeys.forEach(taskKey=>console.log(arr[taskKey]))
        })
    }
        )


  return (
    <div className='flex-grow bg-light-white text-center overflow-auto'>
        <div className=' flex items-center justify-center h-full '>
            <EmptyBoard/>
            {/* print all the tags */}



            














            {/* <div className='flex flex-col'>
                <div className='h-20 w-60 bg-white my-2 mx-2'></div>
                <div className='h-20 w-60 bg-white my-2 mx-2'></div>
                <div className='h-20 w-60 bg-white my-2 mx-2'></div>
                <div className='h-20 w-60 bg-white my-2 mx-2'></div>
                <div className='h-20 w-60 bg-white my-2 mx-2'></div>
                <div className='h-20 w-60 bg-white my-2 mx-2'></div>
                <div className='h-20 w-60 bg-white my-2 mx-2'></div>
                <div className='h-20 w-60 bg-white my-2 mx-2'></div>
                <div className='h-20 w-60 bg-white my-2 mx-2'></div>
                <div className='h-20 w-60 bg-white my-2 mx-2'></div>
                <div className='h-20 w-60 bg-white my-2 mx-2'></div>
                <div className='h-20 w-60 bg-white my-2 mx-2'></div>
                <div className='h-20 w-60 bg-white my-2 mx-2'></div>
                <div className='h-20 w-60 bg-white my-2 mx-2'></div>
                <div className='h-20 w-60 bg-white my-2 mx-2'></div>
                <div className='h-20 w-60 bg-white my-2 mx-2'></div>
                <div className='h-20 w-60 bg-white my-2 mx-2'></div>
                <div className='h-20 w-60 bg-white my-2 mx-2'></div>
            </div>
            <div className='flex flex-col'>
                <div className='h-20 w-60 bg-white my-2 mx-2'></div>
                <div className='h-20 w-60 bg-white my-2 mx-2'></div>
                <div className='h-20 w-60 bg-white my-2 mx-2'></div>
                <div className='h-20 w-60 bg-white my-2 mx-2'></div>
                <div className='h-20 w-60 bg-white my-2 mx-2'></div>
                <div className='h-20 w-60 bg-white my-2 mx-2'></div>
                <div className='h-20 w-60 bg-white my-2 mx-2'></div>
                <div className='h-20 w-60 bg-white my-2 mx-2'></div>
                <div className='h-20 w-60 bg-white my-2 mx-2'></div>
            </div>
            <div className='flex flex-col'>
                <div className='h-20 w-60 bg-white my-2 mx-2'></div>
                <div className='h-20 w-60 bg-white my-2 mx-2'></div>
                <div className='h-20 w-60 bg-white my-2 mx-2'></div>
                <div className='h-20 w-60 bg-white my-2 mx-2'></div>
                <div className='h-20 w-60 bg-white my-2 mx-2'></div>
                <div className='h-20 w-60 bg-white my-2 mx-2'></div>
                <div className='h-20 w-60 bg-white my-2 mx-2'></div>
                <div className='h-20 w-60 bg-white my-2 mx-2'></div>
                <div className='h-20 w-60 bg-white my-2 mx-2'></div>
            </div>
            <div className='flex flex-col'>
                <div className='h-20 w-60 bg-white my-2 mx-2'></div>
                <div className='h-20 w-60 bg-white my-2 mx-2'></div>
                <div className='h-20 w-60 bg-white my-2 mx-2'></div>
                <div className='h-20 w-60 bg-white my-2 mx-2'></div>
                <div className='h-20 w-60 bg-white my-2 mx-2'></div>
                <div className='h-20 w-60 bg-white my-2 mx-2'></div>
                <div className='h-20 w-60 bg-white my-2 mx-2'></div>``
                <div className='h-20 w-60 bg-white my-2 mx-2'></div>
                <div className='h-20 w-60 bg-white my-2 mx-2'></div>
            </div>
            <div className='flex flex-col'>
                <div className='h-20 w-60 bg-white my-2 mx-2'></div>
                <div className='h-20 w-60 bg-white my-2 mx-2'></div>
                <div className='h-20 w-60 bg-white my-2 mx-2'></div>
                <div className='h-20 w-60 bg-white my-2 mx-2'></div>
                <div className='h-20 w-60 bg-white my-2 mx-2'></div>
                <div className='h-20 w-60 bg-white my-2 mx-2'></div>
                <div className='h-20 w-60 bg-white my-2 mx-2'></div>
                <div className='h-20 w-60 bg-white my-2 mx-2'></div>
                <div className='h-20 w-60 bg-white my-2 mx-2'></div>
            </div>
            <div className='flex flex-col'>
                <div className='h-20 w-60 bg-white my-2 mx-2'></div>
                <div className='h-20 w-60 bg-white my-2 mx-2'></div>
                <div className='h-20 w-60 bg-white my-2 mx-2'></div>
                <div className='h-20 w-60 bg-white my-2 mx-2'></div>
                <div className='h-20 w-60 bg-white my-2 mx-2'></div>
                <div className='h-20 w-60 bg-white my-2 mx-2'></div>
                <div className='h-20 w-60 bg-white my-2 mx-2'></div>
                <div className='h-20 w-60 bg-white my-2 mx-2'></div>
                <div className='h-20 w-60 bg-white my-2 mx-2'></div>
            </div> */}
        </div>
        
    </div>
  )
}

export default Board
