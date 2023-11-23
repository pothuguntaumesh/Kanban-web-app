
const { createSlice, configureStore } = require("@reduxjs/toolkit");


const initialState={
    "currentBoard":"platformLaunch",
    "platformLaunch":{
        "todo":[
            {
                "title":'Build UI for onboarding flow',
                "description":'',
                "subtasks":[
                    {
                        "title":"Sign up page",
                        "isCompleted":true,
                        "id":Math.random()
                    },
                    {
                        "title":"Sign in page",
                        "isCompleted":false,
                        "id":Math.random()
                    },
                    {
                        "title":"Welcome page",
                        "isCompleted":false,
                        "id":Math.random()
                    }
                ],
            },
            {
                "title": "Enhance UI for user feedback",
                "description": "Improve user feedback mechanisms",
                "subtasks": [
                  {
                    "title": "Feedback modal",
                    "isCompleted": false,
                    "id": Math.random()
                  },
                  {
                    "title": "User rating component",
                    "isCompleted": false,
                    "id": Math.random()
                  }
                ]
              },
              {
                "title": "Refine onboarding tutorial",
                "description": "Iterate on the onboarding tutorial based on user testing",
                "subtasks": [
                  {
                    "title": "Tutorial design",
                    "isCompleted": false,
                    "id": Math.random()
                  },
                  {
                    "title": "User feedback analysis",
                    "isCompleted": false,
                    "id": Math.random()
                  }
                ]
              },
              {
                "title": "Optimize database queries",
                "description": "Improve efficiency of database queries",
                "subtasks": [
                  {
                    "title": "Identify performance bottlenecks",
                    "isCompleted": false,
                    "id": Math.random()
                  },
                  {
                    "title": "Query optimization",
                    "isCompleted": false,
                    "id": Math.random()
                  }
                ]
              }
        ],
        "doing":[
            {
                "title":'Build UI for search',
                "description":'doing1 description',
                "subtasks":[
                    {
                        "title":"Search page",
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
            {
                "title": "Implement backend ",
                "description": "Set up server-side authentication logic",
                "subtasks": [
                  {
                    "title": "User registration endpoint",
                    "isCompleted": false,
                    "id": Math.random()
                  },
                  {
                    "title": "Token validation",
                    "isCompleted": false,
                    "id": Math.random()
                  }
                ]
              },
              
        ],
        "completed":[
            {
                "title": "Onboarding flow optimizations",
                "description": "Refine onboarding process based on user feedback",
                "subtasks": [
                  {
                    "title": "Performance testing",
                    "isCompleted": true,
                    "id": Math.random()
                  },
                  {
                    "title": "Bug fixes",
                    "isCompleted": true,
                    "id": Math.random()
                  }
                ]
              },
              {
                "title": "UI improvements based on user feedback",
                "description": "Address user interface suggestions",
                "subtasks": [
                  {
                    "title": "Mobile responsiveness",
                    "isCompleted": true,
                    "id": Math.random()
                  },
                  {
                    "title": "Accessibility enhancements",
                    "isCompleted": true,
                    "id": Math.random()
                  }
                ]
              },
              {
                "title": "Backend deployment optimizations",
                "description": "Improve deployment processes for backend services",
                "subtasks": [
                  {
                    "title": "Automate deployment pipelines",
                    "isCompleted": true,
                    "id": Math.random()
                  },
                  {
                    "title": "Monitoring setup",
                    "isCompleted": true,
                    "id": Math.random()
                  }
                ]
              },
              {
                "title": "Feature Development Complete",
                "description": "All new features implemented and tested",
                "subtasks": [
                  {
                    "title": "Final feature testing",
                    "isCompleted": true,
                    "id": Math.random()
                  },
                  {
                    "title": "Documentation",
                    "isCompleted": true,
                    "id": Math.random()
                  }
                ]
              },
              {
                "title": "Bug Fixing for Release",
                "description": "Address and resolve reported bugs for upcoming release",
                "subtasks": [
                  {
                    "title": "Bug triage",
                    "isCompleted": true,
                    "id": Math.random()
                  },
                  {
                    "title": "Code fixes",
                    "isCompleted": true,
                    "id": Math.random()
                  }
                ]
              }
        ],
        
    },
    
    "featureDevelopment": {
        "todo": [
          {
            "title": "Implement User Notifications",
            "description": "Create a notification system for user alerts",
            "subtasks": [
              {
                "title": "Notification UI design",
                "isCompleted": false,
                "id": Math.random()
              },
              {
                "title": "Backend integration",
                "isCompleted": false,
                "id": Math.random()
              }
            ]
          },
          {
            "title": "Integrate Payment Gateway",
            "description": "Enable users to make payments within the application",
            "subtasks": [
              {
                "title": "Payment API integration",
                "isCompleted": false,
                "id": Math.random()
              },
              {
                "title": "User billing dashboard",
                "isCompleted": false,
                "id": Math.random()
              }
            ]
          },
          {
            "title": "Implement Real-time Chat",
            "description": "Add a chat feature for real-time communication",
            "subtasks": [
              {
                "title": "Chat UI development",
                "isCompleted": false,
                "id": Math.random()
              },
              {
                "title": "Backend WebSocket integration",
                "isCompleted": false,
                "id": Math.random()
              }
            ]
          },
          {
            "title": "Enhance User Profile Management",
            "description": "Add new features to the user profile system",
            "subtasks": [
              {
                "title": "Profile picture gallery",
                "isCompleted": false,
                "id": Math.random()
              },
              {
                "title": "Customizable profile themes",
                "isCompleted": false,
                "id": Math.random()
              }
            ]
          },
          {
            "title": "Implement Advanced Search",
            "description": "Enhance the search functionality with advanced filters",
            "subtasks": [
              {
                "title": "Filter by date range",
                "isCompleted": false,
                "id": Math.random()
              },
              {
                "title": "Sort search results",
                "isCompleted": false,
                "id": Math.random()
              }
            ]
          }
        ],
        "doing": [
          {
            "title": "Develop Multi-language Support",
            "description": "Implement support for multiple languages in the application",
            "subtasks": [
              {
                "title": "Translation engine integration",
                "isCompleted": false,
                "id": Math.random()
              },
              {
                "title": "User language preferences",
                "isCompleted": false,
                "id": Math.random()
              }
            ]
          },
          {
            "title": "Optimize Image Loading",
            "description": "Improve image loading performance for a smoother user experience",
            "subtasks": [
              {
                "title": "Lazy loading implementation",
                "isCompleted": false,
                "id": Math.random()
              },
              {
                "title": "Image compression",
                "isCompleted": false,
                "id": Math.random()
              }
            ]
          }
        ],
        "completed": [
          {
            "title": "User Notifications Rollout",
            "description": "Successfully launched the user notification system",
            "subtasks": [
              {
                "title": "User feedback analysis",
                "isCompleted": true,
                "id": Math.random()
              },
              {
                "title": "Performance testing",
                "isCompleted": true,
                "id": Math.random()
              }
            ]
          },
          {
            "title": "Payment Gateway Integration",
            "description": "Completed integration of the payment gateway",
            "subtasks": [
              {
                "title": "Final testing and validation",
                "isCompleted": true,
                "id": Math.random()
              },
              {
                "title": "Documentation",
                "isCompleted": true,
                "id": Math.random()
              }
            ]
          },
          {
            "title": "Real-time Chat Feature Live",
            "description": "Successfully deployed the real-time chat feature",
            "subtasks": [
              {
                "title": "User acceptance testing",
                "isCompleted": true,
                "id": Math.random()
              },
              {
                "title": "Bug fixes",
                "isCompleted": true,
                "id": Math.random()
              }
            ]
          },
          {
            "title": "Enhanced User Profile Features",
            "description": "Implemented additional features for user profiles",
            "subtasks": [
              {
                "title": "Feature showcase",
                "isCompleted": true,
                "id": Math.random()
              },
              {
                "title": "User documentation",
                "isCompleted": true,
                "id": Math.random()
              }
            ]
          },
          {
            "title": "Advanced Search Functionality Complete",
            "description": "Successfully deployed advanced search functionality",
            "subtasks": [
              {
                "title": "User training sessions",
                "isCompleted": true,
                "id": Math.random()
              },
              {
                "title": "Documentation update",
                "isCompleted": true,
                "id": Math.random()
              }
            ]
          }
        ]
      },
      "SubscriptionBoard":{

      }
    }
    
         
        
    




const boardSlice=createSlice({
    name:"boards",
    initialState,
    currentBoard:"platformLaunch",
    reducers:{
        toggleBoard(state,action){
            state.currentBoard=action.payload
        },

        toggleSubTasks(state,action){
            const {title,description,subtasks,curStatusColumn,taskIndex,subtaskIndex}=action.payload
            const board=state["currentBoard"]
            state[state["currentBoard"]][curStatusColumn][taskIndex]["subtasks"][subtaskIndex]["isCompleted"]=!(state[state["currentBoard"]][curStatusColumn][taskIndex]["subtasks"][subtaskIndex]["isCompleted"])
        },
        changeStatusOfTask(state,action){
            const changedTaskStatusValue=state[state["currentBoard"]][action.payload.curStatusColumn].splice(action.payload.taskIndex,1)
            state[state["currentBoard"]][action.payload.changeStatusTo].push(changedTaskStatusValue[0])           
        },
        deleteTask(state,action){

            state[state["currentBoard"]][action.payload.curStatusColumn].splice(action.payload.taskIndex,1)
        },
        deleteBoard(state){
            let allBoards=Object.keys(state)
            allBoards.shift()
            allBoards=allBoards.filter(board=>board!==state["currentBoard"])
            const currentBoardName=state["currentBoard"]
            delete state[currentBoardName]
            if(allBoards.length>0){
            state["currentBoard"]=allBoards[0]
            }
            else{
                state["currentBoard"]=null
            }
        },
        saveEditedTask(state,action){

            const {updatedTitle,updatedDescription,updatedSubtasks,oldTaskStatus,updatedTaskStatus,taskIndex}=action.payload
            state[state["currentBoard"]][oldTaskStatus][taskIndex]["title"]=updatedTitle
            state[state["currentBoard"]][oldTaskStatus][taskIndex]["description"]=updatedDescription
            state[state["currentBoard"]][oldTaskStatus][taskIndex]["subtasks"]=updatedSubtasks
            if(action.payload.oldTaskStatus!==action.payload.updatedTaskStatus){
                const changedTaskStatusValue=state[state["currentBoard"]][oldTaskStatus].splice(taskIndex,1)
                state[state["currentBoard"]][updatedTaskStatus].push(changedTaskStatusValue[0]) 
            }
        
        
        },
        createNewTask(state,action){
            const {newTitle,newDescription,newSubtasksCopy,currentDropDownValue}=action.payload
            state[state["currentBoard"]][currentDropDownValue].push({"title":newTitle,"description":newDescription,"subtasks":newSubtasksCopy})

        },
        saveEditedBoard(state, action) {
            const { newBoardName, columns } = action.payload;
            const currentBoard = state[state["currentBoard"]];
            const curColumns = Object.keys(currentBoard);
            curColumns.forEach(curColumn=>{
                let found=false
                columns.forEach(column=>{
                    if(curColumn===column.oldStatusValue){
                        found=true
                    }
                })
                if(found===false){
                    delete state[state.currentBoard][curColumn]
                }
            })
            columns.forEach(column=>{
                curColumns.forEach(curColumn=>{
                    
                    if(column.oldStatusValue.length===0 && column.newStatusValue.length>0){
                        state[state.currentBoard][column.newStatusValue]=[]
                    }
                    if(column.oldStatusValue===curColumn && column.oldStatusValue!==column.newStatusValue && column.newStatusValue.length>0){
                        let newStateForCurrentBoard={}
                        curColumns.forEach(oldColumn=>{
                            if(oldColumn!==column.oldStatusValue){
                                newStateForCurrentBoard[oldColumn]=state[state.currentBoard][oldColumn]
                            }
                            else{
                                newStateForCurrentBoard[column.newStatusValue]=state[state.currentBoard][oldColumn]
                            }
                        })
                        state[state.currentBoard]=newStateForCurrentBoard
                    }
                })
            })
          
           
          },

        createNewBoard(state,action){
            const {boardName,columns}=action.payload
            const columnsInsideBoard={}
            columns.forEach(column=>{
                columnsInsideBoard[column.columnName]=[]
            })
            state[boardName]=columnsInsideBoard
            state["currentBoard"]=boardName

            
        }


        
    }
    
})

const store=configureStore({
    reducer:boardSlice.reducer
});

export const boardActions=boardSlice.actions;

export default store;