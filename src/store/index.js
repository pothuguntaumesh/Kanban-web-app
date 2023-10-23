const { createSlice, configureStore } = require("@reduxjs/toolkit");

const initialState={
    platformLaunch:{
        todo:[
            {
                title:'todo1',
                description:'todo1 description',
                subtasks:[['subtask1','status'],['subtask2','status']],
            },
            {},
            {},
        ],
        doing:[
            {
                title:'doing1',
                description:'doing1 description',
                subtasks:[[' doing1 subtask1','status'],[' doing1 subtask2','status']],
            },
            {},
            {}
        ],
        completed:[
            {
                title:'completed1',
                description:'completed1 description',
                subtasks:[[' completed1 subtask1','status'],[' completed1 subtask2','status']],
            },
            {},
            {}
        ]

    }
}


const boardSlice=createSlice({
    name:'boards',
    initialState,
    reducers:{

    }
})

const store=configureStore({
    reducer:boardSlice.reducer
});

export const boardActions=boardSlice.actions;

export default store;