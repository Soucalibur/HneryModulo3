import './App.css';
import React from "react";
import Nav from "./Components/Nav.jsx"
import { Route } from "react-router-dom";
import jonhLenon from "./Components/JonhLenon.jsx"
import Paul_McCartney from "./Components/PaulMc.jsx"
import George_Harrison from "./Components/George_Harrison.jsx"
import Richard_Starkey from "./Components/Richard_Starkey.jsx"
import Home from "./Components/Home.jsx"

function App() {
  return (
    <div className="App">
      <h1>Pagina principal</h1>
        <Nav/>
        <Route exact path="/" component={Home} />
        <Route path="/John Lennon" component={jonhLenon} />
        <Route path="/Paul McCartney" component={Paul_McCartney} />
        <Route path="/George Harrison" component={George_Harrison} />
        <Route path="/Richard Starkey" component={Richard_Starkey} />
    </div>
  );
}

export default App;
