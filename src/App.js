import React, { useState } from "react";
import "./App.css";
import ListOrder from "./Components/listOrder";
import Input from "./Components/input";

const App = () => {
  let [listValues, updateListValues] = useState([]);
  let updateTasks = (newTask) => {
    updateListValues([...listValues, newTask]);
  };
  return (
    <div className="container">
      <div className="row">
        <div className="title pt-5 ">
          <h1>TODO</h1>
        </div>
        <div className="register">
          <Input change={updateTasks} />
          <ListOrder tasks={listValues} />
        </div>
      </div>
    </div>
  );
};

export default App;
