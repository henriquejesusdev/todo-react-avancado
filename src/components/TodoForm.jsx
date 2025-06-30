import { useState, useContext } from 'react'
   import TodoContext from '../context/TodoContext'

   function TodoForm() {
     const [input, setInput] = useState('')
     const { addTodo } = useContext(TodoContext)

     const handleSubmit = (e) => {
       e.preventDefault()
       if (input.trim()) {
         addTodo(input)
         setInput('')
       }
     }

     return (
       <form onClick={handleSubmit} className="mb-4 w-full max-w-md">
         <input
           type="text"
           value={input}
           onChange={(e) => setInput(e.target.value)}
           placeholder="Add a new task"
           className="w-full p-2 border rounded"
         />
         <button
           type="submit"
           className="mt-2 w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
         >
           Add Task
         </button>
       </form>
     )
   }

   export default TodoForm