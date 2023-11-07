import React, { useState } from "react";
import Card from "./components/Card";

function App() {
  const [todo, setTodo] = useState([]);
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const onChangeDetail = (e) => {
    setDetail(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const newTodo = {
      id: crypto.randomUUID(),
      todoTitle: title,
      todoDetail: detail,
      isDone: false,
    };

    console.log(todo);
    setTodo([...todo, newTodo]);
    // setTitle("");
    // setDetail("");
  };

  const deleteCard = (id) => {
    const deletedTodo = todo.filter((todo) => todo.id !== id);
    setTodo(deletedTodo);
  };

  return (
    <div>
      <form action="">
        <input type="text" value={title} onChange={() => onChangeTitle()} />
        <input type="text" value={detail} onChange={() => onChangeDetail()} />
        <button onClick={submitHandler}>추가</button>
      </form>

      <Card todoList={todo} onClickDelete={deleteCard} />

      {/* {todo.map((item) => {
        return (
          <div key={item.id}>
            <p>{item.id}</p>
            <p>{item.title}</p>
            <p>{item.detail}</p>
            <button onClick={() => deleteCard(item.id)}>삭제</button>
          </div>
        );
      })} */}
    </div>
  );
}

export default App;
