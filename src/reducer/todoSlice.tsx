import { ITodo } from '@/interface/todo'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
export interface TodoState {
    todos: ITodo[]
    form: ITodo
}

const initialState: TodoState = {
    todos : [],
    form : {
        id:0,
        name: "",
        checkbox: false
    }
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<ITodo>) => {
            state.todos = [...state.todos, action.payload]
        },

        setText: (state, action: PayloadAction<string>) => {
            state.form = {... state.form, name: action.payload}
        },

        setCheckBox: (state, action: PayloadAction<number>) => {
            const temp = state.todos.map(item => {
                if(item.id == action.payload){
                  item.checkbox = !item.checkbox
                }
                return item
              })
            state.todos = temp
        },
    }
})

export const { addTodo, setText, setCheckBox } = todoSlice.actions
export default todoSlice.reducer
