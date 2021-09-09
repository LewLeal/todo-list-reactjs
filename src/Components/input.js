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
          onChange={(e) => setInputValue(e.target.value)}
        ></input>
        <button>Agregue contenido a su lista</button>
      </form>
    </div>
  );
};

export default Input;
