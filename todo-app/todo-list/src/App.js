import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

import "./App.css";

function App() {
  const [name, setName] = useState('');
  const [arrs, setArr] = useState([
    {
      name: "Coding 4 hours",
      completed: true,
      id: 1
    },
    {
      name: "Coding 4 hours",
      completed: false,
      id: 2
    },
    {
      name: "Coding 4 hours",
      completed: false,
      id: 3
    }


  ]);
  const handelChange = e => {
    setName(e.target.value);

  };
  const handleSubmit = e => {
    e.preventDefault();
    const newList = arrs.concat({ name, id: uuidv4(), completed: false });
    console.log(newList);
    setArr(newList);
    setName('');
  };
  const deleteItem = index => {
    const newTodo = [...arrs];
    newTodo.splice(index, 1);
    setArr(newTodo);
  };
  const markComplete = (index) => {
    const newTodo = [...arrs];
    newTodo.map((x) => {
      if (x.id == index) {
        return x.completed !== x.completed
       
      }
    }
    )

    setArr(newTodo);
    console.log(newTodo);


  };
  return (
    <div >
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          value={name}
          placeholder=" todo..."
          onChange={handelChange}
        ></input>
      </form>

      <ul>
        {arrs.map((item, index) => (
          <p key={item.id} style={{ textDecoration: item.completed ? 'line-through' : 'none' }} >
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
