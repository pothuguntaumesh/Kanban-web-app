
import { useState } from "react";
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

function App() {

  const dispatch=useDispatch();
  const selector =useSelector(state=>state);
  const [showAddNewTaskModal,setShowAddNewTaskModal]=useState(false);
  const [taskDetails,setTaskDetails]=useState(undefined);
  const[showTaskModal,setShowTaskModal]=useState(false)
  const [showEditTaskModal,setShowEditTaskModal]=useState(false)
  const [taskDetailsForEditTask,setTaskDetailsForEditTask]=useState(null)
  const [showCreateNewBoardModal,setShowCreateNewBoardModal]=useState(false)
  const [showDeleteModal, setDeleteModal]=useState(false)
  const [showEditBoard,setShowEditBoard]=useState(false)
  const [deleteModalInfo,setDeleteModalInfo]=useState({title:null,desc:null, type:null,taskDetails:null})
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
  const showDeleteModalHandler=(title,desc,type,taskDetails)=>{
    // console.log(title,"inside delete modal handler")
    setDeleteModalInfo({title:title,desc:desc,type:type,taskDetails:taskDetails})
    setDeleteModal(true)
  }
  const hideDeleteModalHandler=()=>{
    setDeleteModal(false)
  }

  const showEditTaskModalFromEllipsis=()=>{
    setShowEditTaskModal(true)
  }
  const showEditBoardModalHandler=()=>{
    setShowEditBoard(true)
  }
  const hideEditBoardModalHandler=()=>{
    setShowEditBoard(false)
  }
  const toggleSubTaskStatus=(taskDetails)=>{
    console.log("Subtask clicked")
    dispatch(boardActions.toggleSubTasks(taskDetails))
  }
  return (
    <div className="h-screen ">
      <NavBar showDeleteModalHandler={showDeleteModalHandler} showEditBoardModalHandler={showEditBoardModalHandler} showAddNewTaskModalHandler={showAddNewTaskModalHandler}/>
      <ContentSection hideShowTaskModal={hideShowTaskModal}  showEditBoardModalHandler={showEditBoardModalHandler}  showCreateBoardModalHandler={showCreateBoardModalHandler} showTaskDetails={showTaskDetails}/>
      {showAddNewTaskModal && <AddNewTask hideAddNewTaskModal={hideAddNewTaskModalHandler}/>}
      {showTaskModal && <ShowTask toggleSubTaskStatus={toggleSubTaskStatus} showDeleteModalHandler={showDeleteModalHandler} editTaskModalHandler={editTaskModalHandler}  hideShowTaskModal={hideShowTaskModal} taskDetails={taskDetails}/>}
      {showEditTaskModal && <EditTask hideEditTaskModalHandler={hideEditTaskModalHandler} taskDetails={taskDetails}/>}
      {showCreateNewBoardModal && <CreateBoard hideCreateBoardModalHandler={hideCreateBoardModalHandler}/>}
      {showDeleteModal && <DeleteModal taskDetails={deleteModalInfo.taskDetails} title={deleteModalInfo.title} desc={deleteModalInfo.desc} type={deleteModalInfo.type} hideDeleteModalHandler={hideDeleteModalHandler}/>}
      {showEditBoard && <EditBoard hideEditBoardModalHandler={hideEditBoardModalHandler}/>}

    </div>
  );
}
export default App;
