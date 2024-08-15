import { useContext, createContext } from "react";

export const ToDoContext  = createContext({

    todos : [

        {
            id: 1,
            todo: 'Task 1',
            completed: false
        }
    ],
    
    addTodo: (todo) => {},
    toggleTodo: (id) => {},
    deleteTodo: (id) => {},
    editTodo: (id, updatedTodo) => {}
})

export const useTodo = ()=>{
    return useContext(ToDoContext)

}

export const ToDoProvider = ToDoContext.Provider