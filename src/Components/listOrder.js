import React from "react";

const ListOrder = (props) => {
  return (
    <div>
      <ol>
        {props.tasks.map((item, key) => {
          return <li key={key}>{item}</li>;
        })}
      </ol>
      <p>{props.tasks.length} Tareas</p>
    </div>
  );
};
export default ListOrder;
