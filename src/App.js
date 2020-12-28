import React from 'react';


export default class Application extends React.Component {
  constructor(props) {
    super(props);

    this.state = { x: 0, y: 0 };
  }

  _onMouseMove(e) {
    { console.log(e) }
    
    this.setState({ x: e.clientX, y: e.clientY });
  }

  render() {
    const { x, y } = this.state;
    return (
      <div
        ref={el => {
          if (!el) return;
  
          console.log(el.getBoundingClientRect().width);
          setTimeout(() => {
            // usually prints a value that is larger than the first console.log
            console.log("later", el.getBoundingClientRect().width);
          });
          setTimeout(() => {
            // usually prints a value that is larger than the second console.log
            console.log("way later", el.getBoundingClientRect().width);
          }, 1000);
        }}
        style={{ display: "inline-block" }}
      >
        <div>Check it out, here is some text in a child element</div>
      </div>
    );
  }
}
