import React, { useState } from "react";

import "./App.css";

function App() {
  const [text, setText] = useState();
  const [arrs, setArr] = useState([
    {
      name: "Coding 4 hours",
      completed: false,
      id: 1
    },
    {
      name: "Go to the Gym ",
      completed: false,
      id: 2
    },
    {
      name: "Make a dinner ",
      completed: false,
      id: 3
    }
  ]);
  const getStyle = () => {
    return {
      background: "black",
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: arrs.completed ? "line-through" : "none"
    };
  };

  const handelChange = e => {
    setText(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    setArr([...arrs, text]);
    setText("");
  };
  const deleteItem = index => {
    const newTodo = [...arrs];
    newTodo.splice(index, 1);
    setArr(newTodo);
  };
  const markComplete = index => {
    arrs.map(x => {
      if (x.id == index) {
        x.completed = !x.completed;
      }
      setArr(arrs);
    });
  };
  return (
    <div style={{ getStyle }}>
      <form onSubmit={handleSubmit}>
        <input
          name="text"
          value={text}
          placeholder=" todo ..."
          onChange={handelChange}
        ></input>
      </form>

      <ul>
        {arrs.map((item, index) => (
          <p key={item.id}>
            <input
              type="checkbox"
              onClick={() => {
                markComplete(index);
              }}
            ></input>
            {item.name}
            <button
              onClick={() => {
                deleteItem(index);
              }}
            >
              x
            </button>
          </p>
        ))}
      </ul>
    </div>
  );
}

export default App;
