
import { useEffect, useState } from "react";
import ContentSection from "./components/ContentSection";
import NavBar from "./components/NavBar";

import AddNewTask from "./modals/AddNewTask";
import { Backdrop } from "./modals/AddNewTask";
import ShowTask from "./modals/ShowTask";
import EditTask from "./modals/EditTask";
import CreateBoard from "./modals/CreateBoard";
import DeleteModal from "./modals/DeleteModal";
import EditBoard from "./modals/EditBoard";
import { useDispatch, useSelector } from "react-redux";
import { boardActions } from "./store";
import NullBoard from "./components/NullBoard";

function App() {
  // console.log("app running")
  const [theme,setTheme]=useState('dark')
  const dispatch=useDispatch();
  const currentBoard =useSelector(state=>state["currentBoard"]);
  const [showAddNewTaskModal,setShowAddNewTaskModal]=useState(false);
  const [taskDetails,setTaskDetails]=useState(undefined);
  const[showTaskModal,setShowTaskModal]=useState(false)
  const [showEditTaskModal,setShowEditTaskModal]=useState(false)
  const [taskDetailsForEditTask,setTaskDetailsForEditTask]=useState(null)
  const [showCreateNewBoardModal,setShowCreateNewBoardModal]=useState(false)
  const [showDeleteModal, setDeleteModal]=useState(false)
  const [showEditBoard,setShowEditBoard]=useState(false)
  const [deleteModalInfo,setDeleteModalInfo]=useState({})
  const showTaskDetails=(task)=>{
    // console.log(task,"Inside the App component")
    setShowTaskModal(true)
    setTaskDetails(task)
  }
  const showAddNewTaskModalHandler=()=>{
    setShowAddNewTaskModal(true)
  }
  const hideAddNewTaskModalHandler=()=>{
    setShowAddNewTaskModal(false)
  }
  const hideShowTaskModal=()=>{
    setShowTaskModal(false)
  }
  const editTaskModalHandler=(taskDetails)=>{
    setShowEditTaskModal(true)
    setTaskDetailsForEditTask(taskDetails)
    setShowTaskModal(false)

  }
  const hideEditTaskModalHandler=()=>{
    setShowEditTaskModal(false)
  }
  const showCreateBoardModalHandler=()=>{
    setShowCreateNewBoardModal(true)
  }
  const hideCreateBoardModalHandler=()=>{
    setShowCreateNewBoardModal(false)
  }
  const showDeleteModalHandler=(deleteModalDetails)=>{
    // console.log(deleteModalDetails,"before updating")
    setDeleteModalInfo(deleteModalDetails)
    // console.log(deleteModalInfo,"Delete modal info after updating")
    setDeleteModal(true)
  }
  const hideDeleteModalHandler=()=>{
    setDeleteModal(false)
  }

  // const showEditTaskModalFromEllipsis=()=>{
  //   setShowEditTaskModal(true)
  // }
  const showEditBoardModalHandler=()=>{
    setShowEditBoard(true)
  }
  const hideEditBoardModalHandler=()=>{
    setShowEditBoard(false)
  }
  const toggleSubTaskStatus=(taskDetails)=>{
    // console.log("Subtask clicked")
    dispatch(boardActions.toggleSubTasks(taskDetails))
  }
  useEffect(()=>{
    if(theme==="dark"){
      document.documentElement.classList.add("dark")
    }
    else{
      document.documentElement.classList.remove("dark")
    }
  },[theme])
  const toggleTheme=()=>{
    console.log("Theme toggled")
    setTheme(theme=>theme==='dark'?"light":"dark")
  }
  return (
    <div className="h-screen ">
      {currentBoard===null && <NullBoard showCreateBoardModalHandler={showCreateBoardModalHandler}/>}
      {currentBoard!==null && <NavBar theme={theme} showDeleteModalHandler={showDeleteModalHandler} showEditBoardModalHandler={showEditBoardModalHandler} showAddNewTaskModalHandler={showAddNewTaskModalHandler}/>}
      {currentBoard!==null &&  <ContentSection toggleTheme={toggleTheme} hideShowTaskModal={hideShowTaskModal}  showEditBoardModalHandler={showEditBoardModalHandler}  showCreateBoardModalHandler={showCreateBoardModalHandler} showTaskDetails={showTaskDetails}/>}
      {showAddNewTaskModal && <AddNewTask hideAddNewTaskModal={hideAddNewTaskModalHandler}/>}
      {showTaskModal && <ShowTask toggleSubTaskStatus={toggleSubTaskStatus} showDeleteModalHandler={showDeleteModalHandler} editTaskModalHandler={editTaskModalHandler}  hideShowTaskModal={hideShowTaskModal} taskDetails={taskDetails}/>}
      {showEditTaskModal && <EditTask hideEditTaskModalHandler={hideEditTaskModalHandler} taskDetails={taskDetails}/>}
      {showCreateNewBoardModal && <CreateBoard hideCreateBoardModalHandler={hideCreateBoardModalHandler}/>}
      {showDeleteModal && <DeleteModal info={deleteModalInfo} taskDetails={deleteModalInfo.taskDetails} title={deleteModalInfo.title} desc={deleteModalInfo.desc} type={deleteModalInfo.type} hideDeleteModalHandler={hideDeleteModalHandler}/>}
      {showEditBoard && <EditBoard hideEditBoardModalHandler={hideEditBoardModalHandler}/>}

    </div>
  );
}
export default App;
