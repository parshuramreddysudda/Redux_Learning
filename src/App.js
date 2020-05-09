import React, { Component } from "react";
import Button from './ButtonComponent';


class App extends Component {

  render() {
    return [
      <div>  
    <Button key={2} withDraw={5000} deposit={5000}></Button>
    </div>
    ];
  }
}

export default App;