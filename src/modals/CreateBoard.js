import React, { useState } from 'react'
import NewBoardColumn from '../components/NewBoardColumn';
import ReactDOM from 'react-dom'


const Backdrop=(props)=>{
    return <div onClick={props.hideCreateBoardModalHandler} className='fixed h-screen bg-light-gray w-full z-10 opacity-60'></div>
}
const ShowCreateBoardModal=()=>{

    const [columns,setColumns]=useState({Todo:'Todo',Doing:'Doing',Completed:'Completed'});
    const [keys,setKeys]=useState(Object.keys(columns))

    const deleteColumnHandler=(input)=>{
      // console.log(input, "Inside deleteColumnHandler in create Board")
      delete columns[input]
      setKeys(Object.keys(columns))
      setColumns(columns)
    }
    const addNewColumnInput=()=>{

    }
    return (
        <div className=' absolute bg-white top-2/4 left-2/4 -translate-x-1/2 -translate-y-1/2 min-h-3/5  w-96 text-light-black rounded-md z-20'>
          {/* {console.log("running this")} */}
          <div className='container  my-4 flex flex-col w-board mx-auto'>
          <div className='flex flex-col mt-4'>
            <p className='text-dark-gray'>Name</p>
            <input placeholder='e.g. Web Design' className='placeholder:text-xs mt-1 border border-light-gray rounded-md h-10 text-sm px-2'/>
            </div>
          </div>
          <div className='flex flex-col mt-4 mx-auto w-board'>
            <p className='text-dark-gray'>Columns</p>
            <div className='container my-4 flex flex-col'>
                {keys.map(key=><NewBoardColumn deleteColumn={deleteColumnHandler} index={key} value={columns[key]}/>)}
                <div onClick={addNewColumnInput} className='text-dark-violet text-sm bg-light-gray my-4 py-2 rounded-full text-center '>+ Add New Column</div>
                <div className='text-white text-sm bg-dark-violet  py-2 rounded-full text-center'>Create Board</div>
            </div>
                </div>
        </div>
      )

}

const CreateBoard = (props) => {
  return (
    <>
    {ReactDOM.createPortal(<Backdrop hideCreateBoardModalHandler={props.hideCreateBoardModalHandler} />,document.getElementById('backdrop'))}
    {ReactDOM.createPortal(<ShowCreateBoardModal />,document.getElementById('overlay'))}
    </>
  )
}

export default CreateBoard
