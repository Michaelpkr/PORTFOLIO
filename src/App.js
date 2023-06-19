import './App.css';
import Header from './Header.js';
import Projects from './Projects';
import About from './About';
import Home from './Home';
import Footer from './Footer'
import { useState } from 'react';
import Pokedex from './Projects/Pokedex';
import War from './Projects/CardGames/War';
import ToDo from './Projects/ToDo/ToDo';
import HomeFooter from './HomeFooter';

function App() {

const [currentPage, setsCurrentPage] = useState(<div><Header /><Home /></div>)

function clickHandler(e){
  console.log(e.target.innerHTML, e.target.alt)
  if(e.target.innerHTML === "PROJECTS"){
    setsCurrentPage(<div><Header /><Projects /><HomeFooter/></div>)
  }else if(e.target.innerHTML === "ABOUT"){
    setsCurrentPage(<div><Header /><About /><Footer/></div>)
  }else if (e.target.innerHTML === "&lt;MP/&gt;"){
    setsCurrentPage(<div><Header /><Home /></div>)
  }else if (e.target.innerHTML === "&lt;-/ PROJECTS"){
    setsCurrentPage(<div><Header /><Projects /><HomeFooter/></div>)
  }else if (e.target.innerHTML === "&lt;-/ HOME"){
    setsCurrentPage(<div><Header /><Home /></div>)}
  else if (e.target.alt === "PokeDex" || e.target.innerHTML === "PokeDex"){
    setsCurrentPage(<div><Header /><Pokedex /><Footer/></div>)
  }else if(e.target.alt === "Card Games" || e.target.innerHTML === "Card Games"){
    setsCurrentPage(<div><Header /><War /><Footer/></div>)
  }else if(e.target.alt === "To-Do List" || e.target.innerHTML === "To-Do List"){
    setsCurrentPage(<div><Header /><ToDo /><Footer/></div>)
  }else return
}
return (
  <div onClick={clickHandler}>
    {currentPage}
  </div>
)
}

export default App;
