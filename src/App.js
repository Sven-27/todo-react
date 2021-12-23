import {useState} from "react"
import './App.css';

function App() {
  // const fakeTasks = ["Work on React", "Learn Magento", "Learn PHP"]

  const [tasks, setTasks] = useState([])
  const [task, setTask] = useState('')

  const addTaskHandler = () => {
    console.log("You clicked me")
    console.log(task)
    // console.log(tasks)
    setTasks([task, ...tasks])
    console.log(tasks)
  }
  return (
    <div className="app">
      <h2 className="title">Todo List App</h2>
      <input type="text" value={task} onChange={e => setTask(e.target.value)} />
      <button onClick={addTaskHandler}>Add Item</button>
      {/* {
        fakeTasks.map(task => (
          <p>{task}</p>
        ))
      } */}
      {
        tasks.map(task => (
          <p key="2">{task}</p>
        ))
      }
    </div>
  );
}

export default App;
