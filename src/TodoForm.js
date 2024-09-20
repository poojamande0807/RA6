import React, { useState, useContext } from 'react';

import { TodoContext } from './TodoContext';

function TodoForm() {

  const [todoText, setTodoText] = useState('');

  const { addTodo } = useContext(TodoContext);

  const handleSubmit = (e) => {

    e.preventDefault();

    if (!todoText) return;

    addTodo(todoText);

    setTodoText('');

  };

  return (

    <form onSubmit={handleSubmit}>

      <input

        type="text"

        value={todoText}

        onChange={(e) => setTodoText(e.target.value)}

        placeholder="Add a new todo"

      />

      <button type="submit">Add</button>

    </form>

  );

}

export default TodoForm;