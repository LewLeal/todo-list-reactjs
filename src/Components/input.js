import React, { useState } from "react";

const Input = (props) => {
  let [inputValue, setInputValue] = useState("");

  function handleSumbit(e) {
    e.preventDefault();
    props.change(inputValue);
  }

  return (
    <div>
      <form onSubmit={handleSumbit}>
        <input
          type="text"
          placeholder="Ingrea una tarea!"
          value={inputValue}
          required
          onChange={(event) => setInputValue(event.target.value)}
        ></input>
        <button>Agregue contenido a su lista</button>
      </form>
    </div>
  );
};

export default Input;
