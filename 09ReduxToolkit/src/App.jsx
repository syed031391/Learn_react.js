import TodoForm from "./components/TodoForm"
import Todolist from "./components/Todolist"

function App() {
 
 return (
    <div className="w-[30%]  bg-white/30 backdrop-blur-md border border-white/30 rounded-lg shadow-lg p-4 block m-auto 
    my-[15%]">
    <h2 className="text-center text-lg font-bold mb-4 text-slate-500">To-Do App</h2>
      <TodoForm />
      <Todolist/>
    </div>
  )
}

export default App
