import {useGetTodoByIdQuery, useGetTodosQuery} from "./slices/apis/todosAPi.js";
import {useState} from "react";

export const TodoApp = () => {
  const [todoId, setTodoId] = useState(0);
  // const {data: todos = [], isLoading} = useGetTodosQuery();
  const {data: todo = [], isLoading} = useGetTodoByIdQuery(1);

  const nextTodo = () => {
    setTodoId(todoId + 1);
  }

  const previousTodo = () => {
    if(todoId >= 1) setTodoId(todoId)
  }

  return (
    <>
      <h1>Todos- RTK Query</h1>
      <hr/>
      <span>Loading: {isLoading ? 'True' : 'False'}</span>

      <pre>{JSON.stringify(todo, null, ' ')}</pre>

      <button onClick={previousTodo}>
        Previous Todo
      </button>

      <button onClick={nextTodo}>
        Next Todo
      </button>
      {/*<ul>*/}
      {/*  {todos.map((todo) => (*/}
      {/*    <li key={todo.id}>*/}
      {/*      <strong>{todo.completed ? 'Done' : 'Pending'} => </strong>*/}
      {/*      {todo.title}*/}
      {/*    </li>*/}
      {/*  ))}*/}
      {/*</ul>*/}
    </>
  );
}