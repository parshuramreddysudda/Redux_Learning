import React, { Component } from "react";
import HelloWorld from './HelloWorld';
import Button from './ButtonComponent';
import store from './store/index';

class App extends Component {

  render() {
    return [
      <div>  <HelloWorld key={1} tech={store.getState().tech} />
    <Button kwy={2} technologies={["React","VueJs","Angular"]}></Button>
    </div>
    ];
  }
}

export default App;