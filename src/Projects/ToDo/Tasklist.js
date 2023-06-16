import Task from "./Task"

export default function Tasklist (props) {
	let taskListElements = props.taskList.map(task => {
	return <Task
			className={task.isChecked ? "task complete" : "task"}
			key={task.id}
			id={task.id}
			setsTaskList={props.setsTaskList}
			name={task.name}
			toggleComplete={() => props.toggleComplete(task.id)}
			isChecked={task.isChecked} />})
	return(
			<div>
				{taskListElements}
			</div>
		)
}