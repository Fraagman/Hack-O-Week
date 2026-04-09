import { useState, useEffect } from 'react';
import { 
  Plus, 
  Trash2, 
  Check, 
  Calendar, 
  Search,
  Layout, 
  ListTodo, 
  CheckSquare, 
  Clock,
  MoreHorizontal
} from 'lucide-react';
import { cn } from './utils/cn';

interface Todo {
  id: string;
  text: string;
  completed: boolean;
  createdAt: number;
}

type FilterType = 'all' | 'today' | 'upcoming' | 'completed';

export function App() {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const saved = localStorage.getItem('todos');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return [];
      }
    }
    return [];
  });

  const [inputValue, setInputValue] = useState('');
  const [filter, setFilter] = useState<FilterType>('all');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const newTodo: Todo = {
      id: crypto.randomUUID(),
      text: inputValue.trim(),
      completed: false,
      createdAt: Date.now(),
    };

    setTodos([newTodo, ...todos]);
    setInputValue('');
  };

  const toggleTodo = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const activeCount = todos.filter((t) => !t.completed).length;
  const completedCount = todos.filter((t) => t.completed).length;

  const getFilteredTodos = () => {
    let result = todos;

    // Filter by status/tab
    if (filter === 'completed') {
      result = result.filter(t => t.completed);
    } else if (filter === 'today') {
      // For demo simplicity, 'today' is just all active tasks. 
      // In a real app, check timestamps.
      result = result.filter(t => !t.completed);
    } else if (filter === 'upcoming') {
      result = []; // Placeholder
    }

    // Filter by search
    if (searchQuery) {
      result = result.filter(t => 
        t.text.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return result;
  };

  const filteredTodos = getFilteredTodos();

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-blue-100">
      <div className="max-w-3xl mx-auto px-4 py-8">
        {/* Header */}
        <header className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-br from-cyan-500 to-blue-600 p-3 rounded-xl shadow-md">
                <CheckSquare className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">My Tasks</h1>
                <p className="text-sm text-gray-500">Stay organized, stay productive</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-cyan-600">{activeCount}</div>
              <div className="text-xs text-gray-500">Active</div>
            </div>
          </div>
        
          {/* Add Task Form */}
          <form onSubmit={addTodo} className="relative">
            <input
              id="new-task-input"
              type="text"
              placeholder="Add a new task..."
              className="w-full bg-gradient-to-r from-cyan-50 to-blue-50 border-2 border-cyan-200 rounded-xl py-3 pl-4 pr-24 text-gray-700 placeholder:text-gray-400 focus:outline-none focus:border-cyan-400 transition-all"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              autoComplete="off"
            />
            <button 
              type="submit" 
              disabled={!inputValue.trim()}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              Add
            </button>
          </form>
        </header>

        {/* Filter Tabs */}
        <div className="flex gap-2 mb-6 overflow-x-auto">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-lg font-medium transition-all whitespace-nowrap ${
              filter === 'all'
                ? 'bg-white text-cyan-600 shadow-md'
                : 'bg-white/50 text-gray-600 hover:bg-white'
            }`}
          >
            All ({todos.length})
          </button>
          <button
            onClick={() => setFilter('today')}
            className={`px-4 py-2 rounded-lg font-medium transition-all whitespace-nowrap ${
              filter === 'today'
                ? 'bg-white text-cyan-600 shadow-md'
                : 'bg-white/50 text-gray-600 hover:bg-white'
            }`}
          >
            Active ({activeCount})
          </button>
          <button
            onClick={() => setFilter('completed')}
            className={`px-4 py-2 rounded-lg font-medium transition-all whitespace-nowrap ${
              filter === 'completed'
                ? 'bg-white text-cyan-600 shadow-md'
                : 'bg-white/50 text-gray-600 hover:bg-white'
            }`}
          >
            Completed ({completedCount})
          </button>
        </div>

        {/* Tasks List */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="space-y-3">

            {filteredTodos.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-12 text-gray-400">
                <ListTodo className="w-16 h-16 mb-4 text-cyan-200" />
                <p className="text-lg font-medium text-gray-600">No tasks yet</p>
                <p className="text-sm">Add your first task to get started</p>
              </div>
            ) : (
              filteredTodos.map((todo) => (
                <div
                  key={todo.id}
                  className="group flex items-center gap-3 p-4 bg-gradient-to-r from-gray-50 to-cyan-50/30 rounded-xl hover:shadow-md transition-all cursor-pointer border border-gray-100"
                  onClick={() => toggleTodo(todo.id)}
                >
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleTodo(todo.id);
                    }}
                    className={cn(
                      'flex-shrink-0 w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all',
                      todo.completed
                        ? 'bg-gradient-to-br from-cyan-500 to-blue-600 border-cyan-500'
                        : 'border-gray-300 hover:border-cyan-400'
                    )}
                  >
                    {todo.completed && <Check className="w-4 h-4 text-white" strokeWidth={3} />}
                  </button>
                  
                  <div className="flex-1">
                    <p className={cn(
                      'font-medium',
                      todo.completed ? 'text-gray-400 line-through' : 'text-gray-700'
                    )}>
                      {todo.text}
                    </p>
                    <p className="text-xs text-gray-400 mt-1">
                      {new Date(todo.createdAt).toLocaleDateString()}
                    </p>
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      deleteTodo(todo.id);
                    }}
                    className="opacity-0 group-hover:opacity-100 p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}