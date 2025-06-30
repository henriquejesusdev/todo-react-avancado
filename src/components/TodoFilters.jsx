import { useContext } from 'react'
   import TodoContext from '../context/TodoContext'

   function TodoFilters() {
     const { filter, setFilter } = useContext(TodoContext)

     return (
       <div className="mb-4 w-full max-w-md flex justify-between">
         <button
           onClick={() => setFilter('all')}
           className={`px-4 py-2 rounded ${filter === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
         >
           All
         </button>
         <button
           onClick={() => setFilter('completed')}
           className={`px-4 py-2 rounded ${filter === 'completed' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
         >
           Completed
         </button>
         <button
           onClick={() => setFilter('pending')}
           className={`px-4 py-2 rounded ${filter === 'pending' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
         >
           Pending
         </button>
       </div>
     )
   }

   export default TodoFilters