import './App.css';
import React, {useState} from "react";


function App() {

  const [input, setInput] = useState("");
  const [tasklist, setTaskList] = useState([]);

  const taskEvents = (event)=>{
    setInput(event.target.value);
  };
  const listOfTask = (e)=>{
    e.preventDefault();
    setTaskList ((prevTask) =>{
       return [...prevTask, input];
    });
    setInput("");
  };
const deleteTask = (id)=>{
  const newtasklist = tasklist.filter((todo,index) => index !== id);
  setTaskList(newtasklist);
};
  return (
  <center>
  <div ClassName='container'>
    <br />
    <h1>To Do List</h1>
    <br />
    <input type="text" placeholder="Add Task" value={input} onChange={taskEvents}/>&nbsp;&nbsp;
    <button onClick={listOfTask}>Add</button>
    <br />
    <div className='list'>
    {tasklist.map((taskListValues, index)=>
      <li key={index} id={index} text={taskListValues}>      
        {taskListValues}&nbsp;&nbsp;
        <button onClick={() => deleteTask(index)}>Delete</button>
        </li>
    )}
  </div>
</div>
</center>
  );
}

export default App;