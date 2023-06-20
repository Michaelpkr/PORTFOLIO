import '../../App.css';
import { useState } from 'react';
import AddTaskForm from './AddTaskForm';
import Tasklist from './Tasklist';
import RemoveTaskButton from './RemoveTask';

function App() {
	const [taskList, setsTaskList] = useState(JSON.parse(localStorage.getItem("taskList")))
  localStorage.setItem("taskList", (JSON.stringify(taskList)))

  function toggleComplete(id){
    setsTaskList(prevState => prevState.map(task =>{
    return task.id == id ? {...task, isChecked: !task.isChecked} : {...task}
    }))
  }
  return(
    <div className="taskContainer">
      <h1 className="taskHeader">Tasklist Creator</h1>
      <AddTaskForm taskList={taskList} setsTaskList={setsTaskList} />

      {taskList.length > 0 && <Tasklist toggleComplete={toggleComplete} taskList={taskList} setsTaskList={setsTaskList} />}

      {taskList.length > 0 ? <RemoveTaskButton setsTaskList={setsTaskList} taskList={taskList} /> : <p>You have no tasks</p>}
    </div>
  )

}

export default App;
