export default function RemoveTaskButton(props){
	function removeTask(){
		props.setsTaskList(prevState => (prevState.filter(task => task.isChecked == false)))
	}

	return(
		<button className="removeTaskBtn" onClick={removeTask}>Remove Completed Tasks</button>
	)
}