import { TodoProvider } from "./context/TodoContext";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import TodoFilters from "./components/TodoFilters";

function App() {
  return (
    <TodoProvider>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
        <h1 className="text-3xl font-bold mb-6">Todo List</h1>
        <TodoForm />
        <TodoFilters />
        <TodoList />
      </div>
    </TodoProvider>
  );
}

export default App;
