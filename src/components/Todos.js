import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTodos } from "../services/actions/todosAction";

const Todos = () => {
  const { isLoading, todos, error } = useSelector((state) => state);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTodos());
  }, []);
  return (
    <div>
      {isLoading && <h3>Loading... </h3>}
      {error && <h3>{error.message}</h3>}

      <section>
        {todos && todos.map ((todo) => {
            return (
                <article key={todo.id}>
                    <h4>{todo.id}</h4>
                    <h3>{todo.title}</h3>
                </article>
            )
        })}
      </section>
    </div>
  );
};

export default Todos;
