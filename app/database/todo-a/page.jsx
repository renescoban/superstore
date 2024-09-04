"use client"
import { useState } from 'react';

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, { text: newTodo, isChecked: false }]);
      setNewTodo('');
    }
  };

  const toggleCheck = (index) => {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? { ...todo, isChecked: !todo.isChecked } : todo
    );
    setTodos(updatedTodos);
  };

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <div className="mb-4">
        <input
          type="text"
          className="border p-2 w-full"
          placeholder="Add a new task"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button
          onClick={addTodo}
          className="bg-blue-500 text-white p-2 mt-2 w-full"
        >
          Add Todo
        </button>
      </div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index} className="flex justify-between items-center p-2">
            <div
              onClick={() => toggleCheck(index)}
              className={`cursor-pointer select-none ${
                todo.isChecked ? 'line-through text-gray-500' : ''
              }`}
            >
                <input type='checkbox' onClick={() => toggleCheck(index)} checked={todo.isChecked} />
              {todo.text}
            </div>
            <button
              onClick={() => deleteTodo(index)}
              className="bg-red-500 text-white px-2 rounded-full "
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
