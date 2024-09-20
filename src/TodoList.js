import React, { useContext } from 'react';

import { TodoContext } from './TodoContext';

import TodoItem from './TodoItem';

function TodoList() {

  const { todos, toggleTodo, deleteTodo } = useContext(TodoContext);

  return (

    <ul>

      {todos.map((todo, index) => (

        <TodoItem

          key={index}

          index={index}

          todo={todo}

          toggleTodo={toggleTodo}

          deleteTodo={deleteTodo}

        />

      ))}

    </ul>

  );

}

export default TodoList;