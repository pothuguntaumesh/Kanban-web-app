import React, { useState } from 'react'
import NewBoardColumn from '../components/NewBoardColumn';
import ReactDOM from 'react-dom'
import { useDispatch } from 'react-redux';
import { boardActions } from '../store';


const Backdrop=(props)=>{
    return <div onClick={props.hideCreateBoardModalHandler} className='fixed h-screen bg-light-gray w-full z-10 opacity-60'></div>
}
const ShowCreateBoardModal=(props)=>{
  const dispatch=useDispatch();
  const [columns,setColumns]=useState([{columnName:"",id:Math.random()},{columnName:"",id:Math.random()},{columnName:"",id:Math.random()}])
  const [title,setTitle]=useState("")

    const deleteColumnHandler=(id)=>{
      setColumns(columns=>columns.filter(column=>column.id!==id))
    }
    const titleChangeHandler=(event)=>{
      setTitle(event.target.value)
    }
    const columnChangeHandler=(event,id)=>{
      setColumns(columns=>columns.map(column=>{
        if(column.id===id){
          column.columnName=event.target.value
        }
        return column
      }))
    }
    const addNewColumnHandler=()=>{
      setColumns(columns=>[...columns,{columnName:"",id:Math.random()}])

    }
    const createBoardHandler=()=>{
      const columnsCopy=columns.filter(column=>column.columnName.length>0)

      const actionObject={boardName:title,columns:columnsCopy}
      dispatch(boardActions.createNewBoard(actionObject))
      setColumns(columnsCopy)
      props.hideCreateBoardModalHandler()

    }
    return (
        <div className='dark:bg-dark-brown absolute bg-white top-2/4 left-2/4 -translate-x-1/2 -translate-y-1/2 min-h-3/5  w-96 text-light-black rounded-md z-20'>
          <div className='container  my-4 flex flex-col w-board mx-auto'>
          <div className='flex flex-col mt-4'>
            <p className='text-dark-gray'>Name</p>
            <input onChange={(event)=>titleChangeHandler(event)} placeholder='e.g. Web Design' className='dark:bg-dark-brown dark:border-light-brown dark:text-light-gray placeholder:text-xs mt-1 border border-light-gray rounded-md h-10 text-sm px-2'/>
            </div>
          </div>
          <div className='flex flex-col mt-4 mx-auto w-board'>
            <p className='text-dark-gray'>Columns</p>
            <div className='container my-4 flex flex-col'>
                {columns.map(column=><NewBoardColumn statusChangeHandler={columnChangeHandler}  deleteColumnHandler={deleteColumnHandler} id={column.id} key={column.id}/>)}
                <div onClick={addNewColumnHandler}  className='cursor-pointer dark:bg-white text-dark-violet text-sm bg-light-gray my-4 py-2 rounded-full text-center '>+ Add New Column</div>
                <div onClick={createBoardHandler} className='cursor-pointer  text-white text-sm bg-dark-violet  py-2 rounded-full text-center'>Create Board</div>
            </div>
                </div>
        </div>
      )

}

const CreateBoard = (props) => {
  return (
    <>
    {ReactDOM.createPortal(<Backdrop hideCreateBoardModalHandler={props.hideCreateBoardModalHandler} />,document.getElementById('backdrop'))}
    {ReactDOM.createPortal(<ShowCreateBoardModal hideCreateBoardModalHandler={props.hideCreateBoardModalHandler} />,document.getElementById('overlay'))}
    </>
  )
}

export default CreateBoard
