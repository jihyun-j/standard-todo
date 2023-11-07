import React from "react";

function Card({ todoList, onClickDelete }) {
  return (
    <div>
      {todoList.map((item) => {
        return (
          <div key={item.id}>
            <p>{item.id}</p>
            <p>{item.title}</p>
            <p>{item.detail}</p>
            <button onClick={() => onClickDelete(item.id)}>삭제</button>
          </div>
        );
      })}
    </div>
  );
}

export default Card;
