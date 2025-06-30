import { useContext, useMemo } from 'react'
   import TodoContext from '../context/TodoContext'
   import TodoItem from './TodoItem'

   function TodoList() {
     const { todos } = useContext(TodoContext)

     const memoizedTodos = useMemo(() => {
       return todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
     }, [todos])

     return (
       <ul className="w-full max-w-md">
         {memoizedTodos.length > 0 ? (
           memoizedTodos
         ) : (
           <li className="text-center p-4 text-gray-500">No tasks available</li>
         )}
       </ul>
     )
   }

   export default TodoList