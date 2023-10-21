import React from 'react'
import SideBar from './SideBar'
import Board from './Board'

const ContentSection = () => {
  return (
    <div className=' flex h-board'>
      <SideBar/>
      <Board/>
    </div>
  )
}

export default ContentSection;
