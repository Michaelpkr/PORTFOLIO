export default function Task (props) {
	return(
		<div className="task">
			<h3>{props.name}</h3>
			<input className="checkbox" onClick={() => props.toggleComplete()} checked={props.isChecked} type="checkbox" ></input>
		</div>
	)
}