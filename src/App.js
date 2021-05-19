import React, { Component } from "react";
import Calculator from "./components/Calculator";
import './css/main.css';

class App extends Component {
  constructor() {
    super();
    this.appTheme = React.createRef();
  }
  render() {
    return (
      <div className="App" ref={this.appTheme}>
        <Calculator 
          appTheme={this.appTheme}
        />
      </div>
    );
  }
  }

export default App;
