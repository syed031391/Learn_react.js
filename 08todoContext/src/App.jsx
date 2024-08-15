import TodoForm from "./components/TodoFrom"
import TodoItem from "./components/TodoItems"
import { ToDoProvider } from "./context/TodoContext"
import { useState } from "react"



function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prv) => [{ id: Date.now(), ...todo }, ...prv]);
  }

  const updateTodo = (id, todo) => {
    setTodos(prev => prev.map(t =>
       t.id === id ? { ...t, todo } : t))
  }

  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id ? {
          ...prevTodo,
          completed: !prevTodo.completed
        } : prevTodo))
  }
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  }
  return (
    <>
      <ToDoProvider value={{ todos, addTodo, toggleComplete, updateTodo, toggleComplete, deleteTodo }}>
        <div className="bg-[#172842] min-h-screen py-8">
          <div className="w-full max-w-2xl px-4 py-3 mx-auto text-white rounded-lg shadow-md">
            <h1 className="mt-2 mb-8 text-2xl font-bold text-center">Manage Your Todos</h1>
            <div className="mb-4">
              <TodoForm />
            </div>
            <div className="flex flex-wrap gap-y-3">
              {
                todos.map((todo) => {
                  return <div key={todo.id} className='w-full'>
                    <TodoItem todo={todo} />
                  </div>
                })
              }
            </div>
          </div>
        </div>
      </ToDoProvider>
    </>
  )
}

export default App
