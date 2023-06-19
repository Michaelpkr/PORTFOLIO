import './App.css';
import Header from './Header.js';
import Projects from './Projects';
import About from './About';
import Home from './Home';
import Footer from './Footer'
import { useState } from 'react';
import Pokedex from './Projects/Pokedex';
import War from './Projects/CardGames/War';
import ToDo from './Projects/ToDo/ToDo'

function App() {

const [currentPage, setsCurrentPage] = useState(<div><Header /><Home /></div>)

function clickHandler(e){
  console.log(e.target.id)
  if(e.target.innerHTML === "PROJECTS"){
    setsCurrentPage(<div><Header /><Projects /><Footer/></div>)
  }else if(e.target.innerHTML === "ABOUT"){
    setsCurrentPage(<div><Header /><About /><Footer/></div>)
  }else if (e.target.innerHTML === "&lt;MP/&gt;"){
    setsCurrentPage(<div><Header /><Home /></div>)
  }else if (e.target.innerHTML === "&lt;-/"){
    setsCurrentPage(<div><Header /><Home /></div>)
  }else if (e.target.innerHTML || e.target.alt === "PokeDex"){
    setsCurrentPage(<div><Header /><Pokedex /><Footer/></div>)
  }else if(e.target.innerHTML || e.target.alt === "Card Games"){
    setsCurrentPage(<div><Header /><War /><Footer/></div>)
  }else if(e.target.innerHTML || e.target.alt === "To-Do List"){
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
