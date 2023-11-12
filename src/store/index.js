
const { createSlice, configureStore } = require("@reduxjs/toolkit");

const initialState={
    "currentBoard":"platformLaunch",
    "platformLaunch":{
        "todo":[
            {
                "title":'QA and test all major user journeys ',
                "description":'Once we feel version one is ready, we need to rigorously test it both internally and externally to identify any major gaps.',
                "subtasks":[
                    {
                        "title":"Internal testing",
                        "isCompleted":true,
                        "id":Math.random()
                    },
                    {
                        "title":"External testing",
                        "isCompleted":false,
                        "id":Math.random()
                    }
                ],
            },
            {
                "title":'Something different for testing',
                "description":'Something different for testing',
                "subtasks":[
                    {
                        "title":"Internal testing",
                        "isCompleted":true,
                        "id":Math.random()
                    },
                    {
                        "title":"External testing",
                        "isCompleted":false,
                        "id":Math.random()
                    }
                ],
            }
        ],
        "doing":[
            {
                "title":'doing1',
                "description":'doing1 description',
                "subtasks":[
                    {
                        "title":"Internal testing",
                        "isCompleted":false,
                        "id":Math.random()
                    },
                    {
                        "title":"External testing",
                        "isCompleted":false,
                        "id":Math.random()
                    }
                ],
            },
        ],
        "completed":[
            {
                "title":'completed1',
                "description":'completed1 description',
                "subtasks":[
                    {
                        "title":"Internal testing",
                        "isCompleted":false,
                        "id":Math.random()
                    },
                    {
                        "title":"External testing",
                        "isCompleted":false,
                        "id":Math.random()
                    }
                ],
            },
        ],
        
    },
}


const boardSlice=createSlice({
    name:"boards",
    initialState,
    currentBoard:"platformLaunch",
    reducers:{
        toggleBoard(state,action){
            // console.log("Inside toggleBoard")
            // console.log(typeof(action.payload))
            state.currentBoard=action.payload
            
        },

        toggleSubTasks(state,action){

            const {title,description,subtasks,curStatusColumn,taskIndex,subtaskIndex}=action.payload
            // console.log(action.payload)
            const board=state["currentBoard"]
            // console.log(board)
            // state["platformLaunch"]["todo"][taskIndex]["subtasks"][subtaskIndex]["isCompleted"]
            
            // console.log("Inside toggleSubTasks")
            // console.log(action.payload)
            // console.log(state)
            // // console.log(state.currentBoard[action.payload.curStatusColumn])
            // console.log(state["currentBoard"].todo)
            // state["currentBoard"][action.payload.currentColumn]["subtasks"][action.payload.subtaskIndex]['status']=!state.currentBoard[action.payload.currentColumn]['subtasks'][action.payload.index]['status']
            // console.log(state["platformLaunch"]["todo"][taskIndex]["subtasks"][subtaskIndex]["isCompleted"])
            state[state["currentBoard"]][curStatusColumn][taskIndex]["subtasks"][subtaskIndex]["isCompleted"]=!(state["platformLaunch"][curStatusColumn][taskIndex]["subtasks"][subtaskIndex]["isCompleted"])
            // console.log(state["platformLaunch"]["todo"][taskIndex]["subtasks"][subtaskIndex]["isCompleted"])
        },
        changeStatusOfTask(state,action){

            // console.log(action.payload,"Inside the changeStatusOfTask")
            const changedTaskStatusValue=state[state["currentBoard"]][action.payload.curStatusColumn].splice(action.payload.taskIndex,1)
            // console.log(changedTaskStatusValue[0],"changdTaskIndexValue")
            // console.log(typeof(changedTaskStatusValue),"changdTaskIndexValue")
            state[state["currentBoard"]][action.payload.changeStatusTo].push(changedTaskStatusValue[0])           
        },
        deleteTask(state,action){
            console.log(action.payload,"Inside deleteTask")
            state[state["currentBoard"]][action.payload.curStatusColumn].splice(action.payload.taskIndex,1)
        },
        saveEditedTask(state,action){
            console.log(action.payload,"Inside the saveEditedTask")
            const {updatedTitle,updatedDescription,updatedSubtasks,oldTaskStatus,updatedTaskStatus,taskIndex}=action.payload
            console.log(updatedTitle,updatedDescription,updatedSubtasks,oldTaskStatus,updatedTaskStatus,taskIndex)
            console.log(updatedSubtasks,"updated Subtasks inside the save Edited Task")
            //First update task and at last change the status if old status is not same as new status
            state[state["currentBoard"]][oldTaskStatus][taskIndex]["title"]=updatedTitle
            state[state["currentBoard"]][oldTaskStatus][taskIndex]["description"]=updatedDescription
            state[state["currentBoard"]][oldTaskStatus][taskIndex]["subtasks"]=updatedSubtasks
            if(action.payload.oldTaskStatus!==action.payload.updatedTaskStatus){
                //Just update the task but don't change the status
                const changedTaskStatusValue=state[state["currentBoard"]][oldTaskStatus].splice(taskIndex,1)
                state[state["currentBoard"]][updatedTaskStatus].push(changedTaskStatusValue[0]) 
            }
        
        
        },
        createNewTask(state,action){
            // console.log("Insidet creat new task ",action.payload)
            const {newTitle,newDescription,newSubtasksCopy,currentDropDownValue}=action.payload
            // console.log(newSubtasks,"Value of new subtasks inside create new task")
            state[state["currentBoard"]][currentDropDownValue].push({"title":newTitle,"description":newDescription,"subtasks":newSubtasksCopy})

        }
        
    }
    
})

const store=configureStore({
    reducer:boardSlice.reducer
});

export const boardActions=boardSlice.actions;

export default store;