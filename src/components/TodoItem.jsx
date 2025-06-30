import { useContext, memo } from 'react'
   import TodoContext from '../context/TodoContext'

   function TodoItem({ todo }) {
     const { toggleTodo, removeTodo } = useContext(TodoContext)

     return (
       <li className="flex items-center justify-between p-2 border-b">
         <div className="flex items-center">
           <input
             type="checkbox"
             checked={todo.completed}
             onChange={() => toggleTodo(todo.id)}
             className="mr-2"
           />
           <span className={todo.completed ? 'line-through text-gray-500' : ''}>
             {todo.text}
           </span>
         </div>
         <button
           onClick={() => removeTodo(todo.id)}
           className="text-red-500 hover:text-red-700"
         >
           Remove
         </button>
       </li>
     )
   }

   export default memo(TodoItem)