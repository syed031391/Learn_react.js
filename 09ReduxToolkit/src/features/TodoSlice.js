import React from 'react'
import { createSlice, nanoid } from "@reduxjs/toolkit"

const initialState = {
    todos: [{
        id: nanoid(),
        title: 'Task 1',
        completed: false,
    }],
}

export const todoSlice = createSlice({

    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                title: action.payload,
                completed: false,
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => { 
            state.todos= state.todos.filter(todo => todo.id !==action.payload)
        },
        editeTodo: (state, action) => {
            const {title, id}=action.payload
            const todoUpdate = state.todos.find(todo => todo.id ===id);
            if(todoUpdate){
                todoUpdate.title=title
            }
        }}
    })


export const { addTodo, removeTodo, editeTodo } = todoSlice.actions

export const todoReducer = todoSlice.reducer