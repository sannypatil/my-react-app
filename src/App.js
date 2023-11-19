import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get('https://localhost:7257/api/Todo')
      .then(response => {
        setTodos(response.data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todos.map(todo => <li key={todo.id}>{todo.name}</li>)}
      </ul>
    </div>
  );
}

export default App;
