import React from 'react'
import SideBar from './SideBar'
import Board from './Board'

const ContentSection = (props) => {
  return (
    <div className='flex h-board  '>
      <SideBar toggleTheme={props.toggleTheme}  showCreateBoardModalHandler={props.showCreateBoardModalHandler}/>
      <Board hideShowTaskModal={props.hideShowTaskModal} showEditBoardModalHandler={props.showEditBoardModalHandler} showTaskDetails={props.showTaskDetails}/>
    </div>
  )
}

export default ContentSection;
