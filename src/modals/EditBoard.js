import React, { useState } from 'react'
import NewBoardColumn from '../components/NewBoardColumn';
import ReactDOM from 'react-dom'
import { useDispatch, useSelector } from 'react-redux';
import { boardActions } from '../store';


const Backdrop=(props)=>{
    return <div onClick={props.hideEditBoardModalHandler} className='fixed h-screen bg-light-gray w-full z-10 opacity-60'></div>
}

const ShowEditBoardModal=(props)=>{
    const disptach=useDispatch();
    const currentBoard=useSelector(state=>state.currentBoard);
    const [newBoardName,setNewBoardName]=useState(currentBoard);
    const curStatusValues=Object.keys(useSelector(state=>state[currentBoard]));
    const [modifiedStatusValues,setModifiedStatusValues]=useState(curStatusValues.map(curStatusValue=>{return {oldStatusValue:curStatusValue,newStatusValue:curStatusValue,id:Math.random()}}));

    const boardNameChangeHandler=(event)=>{
      setNewBoardName(event.target.value)
    }

    const deleteColumnHandler=(id)=>{
      setModifiedStatusValues(modifiedStatusValues=>modifiedStatusValues.filter(modifiedStatusValue=>modifiedStatusValue.id!==id))
    }
    const addNewColumnHandler=()=>{
      setModifiedStatusValues(modifiedStatusValues=>{
        const newStatusValues = [...modifiedStatusValues, { oldStatusValue: "", newStatusValue: "", id: Math.random() }];
        return newStatusValues
      })
    }
   
    const statusChangeHandler = (event, id) => {
      setModifiedStatusValues((prevStatusValues) => {
        const updatedStatusValues = prevStatusValues.map((modifiedStatusValue) => {
          if (modifiedStatusValue.id === id) {
            return { ...modifiedStatusValue, newStatusValue: event.target.value };
          }
          return modifiedStatusValue;
        });
        return updatedStatusValues;
      });
    };
    const saveChangesHandler=()=>{
      const actionObject={newBoardName:newBoardName,columns:modifiedStatusValues}
      disptach(boardActions.saveEditedBoard(actionObject))
      props.hideEditBoardModalHandler()

    }
    

    
    return (
        <div className='dark:bg-dark-brown  absolute bg-white top-2/4 left-2/4 -translate-x-1/2 -translate-y-1/2 min-h-3/5  w-96 text-light-black rounded-md z-20'>
          <div className='container  my-4 flex flex-col w-board mx-auto'>
          <div className='flex flex-col mt-4'>
            <h2 className='dark:text-white mb-2'>Edit Board</h2>
            <p className='dark:text-white mb-1 text-dark-gray'>Name</p>
            <input onChange={boardNameChangeHandler} placeholder='e.g. Web Design' className='dark:bg-dark-brown dark:border-light-brown dark:text-white placeholder:text-xs mt-1 border border-light-gray rounded-md h-10 text-sm px-2' defaultValue={newBoardName}/>
            </div>
          </div>
          <div className='flex flex-col mt-4 mx-auto w-board'>
            <p className='text-dark-gray dark:text-white'>Columns</p>
            <div className='container my-4 flex flex-col'>
                {modifiedStatusValues.map(modifiedStatusValue=><NewBoardColumn key={modifiedStatusValue.id} id={modifiedStatusValue.id} oldStatusValue={modifiedStatusValue.oldStatusValue} newStatusValue={modifiedStatusValue.newStatusValue} deleteColumnHandler={deleteColumnHandler} statusChangeHandler={statusChangeHandler}/>)}
                <div onClick={addNewColumnHandler} className='dark:bg-white text-dark-violet text-sm bg-light-gray my-4 py-2 rounded-full text-center cursor-pointer'>+ Add New Column</div>
                <div onClick={saveChangesHandler} className='text-white text-sm bg-dark-violet  py-2 rounded-full text-center cursor-pointer'>Save Changes</div>
            </div>
              </div>
        </div>
      )

}

const EditBoard = (props) => {
  return (
    <>
    {ReactDOM.createPortal(<Backdrop hideEditBoardModalHandler={props.hideEditBoardModalHandler} />,document.getElementById('backdrop'))}
    {ReactDOM.createPortal(<ShowEditBoardModal hideEditBoardModalHandler={props.hideEditBoardModalHandler} />,document.getElementById('overlay'))}
    </>
  )
}

export default EditBoard
