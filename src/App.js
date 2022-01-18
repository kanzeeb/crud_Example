import React, { Component } from "react";
import "./App.css";
import Menu from './components/menu';
import Users from './components/users';
import Pokemon from "./components/pokemon";


class App extends Component {

  render() {
    return (
      <React.Fragment>
        <div className="App-container">    
        <div>
          <Menu />
        </div>              
        <div>
          <Users /> 
        </div> 
        </div>       
      </React.Fragment>
    );
  }
}

export default App;
