import { useState } from "react"
export default function AddTaskForm(props){
	const [currentInput, setsCurrentInput] = useState("")

	function changeHandler(e){
		setsCurrentInput(e.target.value)
	}

	function addsTask(event){
		event.preventDefault()
		if(currentInput.length > 0){
		props.setsTaskList(
			prevList => [
			...prevList,
			{name: currentInput,
			id: currentInput + prevList.length,
			isChecked: false}
			]
		);
		setsCurrentInput("")
	}
}

	return(
		<form onSubmit={addsTask} className="addTask">
			<input className="addTaskInput" onChange={changeHandler} type="text" name="task" value={currentInput} placeholder="Add Task Here"/>
			<button className="addTaskBtn" type="submit">Add Task</button>
		</form>
	)
}