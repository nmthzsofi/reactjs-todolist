import { useState } from "react";

function TodoInput(props) {
  const { todoValue, setTodoValue, handleAddTodos } = props;

  return (
    <header>
      <input
        value={todoValue}
        onChange={(e) => setTodoValue(e.target.value)}
        placeholder="Enter todo..."
      />
      <button
        onClick={() => {
          handleAddTodos(todoValue);
        }}
      >
        Add
      </button>
    </header>
  );
}

export default TodoInput;
