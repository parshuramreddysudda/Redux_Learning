import React, { Component } from "react";
import HelloWorld from './HelloWorld';
import Button from './ButtonComponent';
import store from './store/index';


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