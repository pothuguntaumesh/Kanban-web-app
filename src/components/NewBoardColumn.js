import React from 'react'

const NewBoardColumn = (props) => {
  return (
    <div className='flex gap-4 items-center '>
        <input onChange={(event)=>props.statusChangeHandler(event,props.index,props.value)} className='placeholder:text-xs mt-1 border border-light-gray rounded-md h-10 w-board text-sm px-2' type='text' defaultValue={props.value} placeholder='eg. In QA'/>
        <svg onClick={()=>props.deleteColumnHandler(props.index)} width="15" height="15" xmlns="http://www.w3.org/2000/svg"><g fill="#828FA3" fill-rule="evenodd"><path d="m12.728 0 2.122 2.122L2.122 14.85 0 12.728z"/><path d="M0 2.122 2.122 0 14.85 12.728l-2.122 2.122z"/></g></svg>
    </div>
  )
}

export default NewBoardColumn
