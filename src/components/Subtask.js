import React from 'react'

const Subtask = (props) => {
  return (
    <div className='  flex items-center justify-center gap-4 '>
        <input onChange={(event)=>props.subTaskChangeHandler(event,props.id)} defaultValue={props.subTask} placeholder='e.g.Finish Backdrop' className='dark:bg-dark-brown dark:border-light-brown dark:text-light-gray placeholder:text-xs mt-1 border border-light-gray rounded-md h-10 w-board text-sm px-2'/>
        <div className='w-10 h-10 flex items-center justify-center'>
            <svg onClick={()=>props.removeSubTask(props.id)}  width="15" height="15" xmlns="http://www.w3.org/2000/svg"><g fill="#828FA3" fill-rule="evenodd"><path d="m12.728 0 2.122 2.122L2.122 14.85 0 12.728z"/><path d="M0 2.122 2.122 0 14.85 12.728l-2.122 2.122z"/></g></svg>
    </div>
</div>
  )
}

export default Subtask
