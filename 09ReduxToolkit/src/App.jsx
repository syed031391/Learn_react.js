import TodoForm from "./components/TodoForm"
import Todolist from "./components/Todolist"

function App() {
 
 return (
    <div class="w-[30%] h-80 bg-white/30 backdrop-blur-md border border-white/30 rounded-lg shadow-lg p-4 block m-auto 
    my-[15%]">
    <h2 class="text-white text-lg font-bold mb-4">To-Do App</h2>
      <TodoForm />
      <Todolist/>
    </div>
  )
}

export default App
