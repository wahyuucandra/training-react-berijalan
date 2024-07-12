import { ITodo } from '@/interface/todo'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
export interface TodoState {
    todos: ITodo[]
    form: Form
}

interface Form {
    text: string,
    checkbox: boolean
}

const initialState: TodoState = {
    todos : [],
    form : {
        text: "",
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
            state.form = {... state.form, text: action.payload}
        },

        setCheckBox: (state, action: PayloadAction<string>) => {
            const temp = state.todos.map(item => {
                if(item.name == action.payload){
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
