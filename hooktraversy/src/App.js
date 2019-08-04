
import React,{useState} from 'react';
import './App.css';




function Todo({todo,index,completedTodo,deleteOne}){

  return<div className='todo'
  style={{textDecoration:todo.isCompleted ? 'line-through' : ''}}
>{todo.text}
<div>
<button onClick={()=>completedTodo(index)}>Complete</button>
<button onClick={()=>deleteOne(index)}>X</button>
</div>
</div>
}

function  TodoForm ({addTodo}){
  
   const [value,setValue]=useState("");
   
    const handleSubmit =e=>{
    e.preventDefault();
   
     if(!value) return;
     addTodo(value);
     setValue('');
    };
    return(
  <form onSubmit={handleSubmit}>
    <input
    type='text'
    className='input'
    value='input'
    placeholder='Add todo'
    value={value}
    onChange={e=>setValue(e.target.value)}
    ></input>
  </form>
)
}

function App() {
  const [todos, setTodos] = useState([
    {
      text: "Learn about React",
      isCompleted: false
    },
    {
      text: "Meet friend for lunch",
      isCompleted: false
    },
    {
      text: "Build really cool todo app",
      isCompleted: false
    }
  ]);
  
  const addTodo = text =>{
    const newTodos=[...todos,{text}];
    setTodos(newTodos);
  } 
  
  const completedTodo=index =>{
    const newTodos=[...todos];
    newTodos[index].isCompleted=true;
    setTodos(newTodos);
  }

  const deleteOne= index => {
const newTodos=[...todos];
newTodos.splice(index,1);
setTodos(newTodos)
  }
  return (
    <div className='app'>
  <div className='todo-list'>
     {todos.map((todo,index)=>( 
       <Todo key={index} index={index} todo={todo}
       completedTodo={completedTodo}
       deleteOne={deleteOne}
       />
       ))}
      <TodoForm addTodo={addTodo}/>
  </div>
</div>

)
}
export default App;