export default function About(){
	const prePara = "<p>"
	const postPara = "</p>"
	return(
		<div className="container">
			<h2>ABOUT</h2>
			<div className="typewriter">
			<p>{prePara} I'm a software engineer, based in Nashville, Tennessee.<br></br><br></br> I began learning to code in February of 2022, beginning with HTML, CSS, and JavaScript.<br></br><br></br>I'm currently learning React, and this project is to showcase my learnings, and overall be a storehouse of the projects I've been working on. {postPara}</p>
			</div>
		</div>
	)
}