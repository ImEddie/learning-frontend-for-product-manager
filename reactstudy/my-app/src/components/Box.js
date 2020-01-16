import React from "react";
import "./Box.css";

class Box extends React.Component {
  constructor(props) {
    super(props);
    this.state = { number: 0 };
    this.clickMinus = this.clickMinus.bind(this);
    this.clickPlus = this.clickPlus.bind(this);
  }

  clickPlus() {
    this.setState({
      number: this.state.number + 1
    });
  }

  clickMinus() {
    this.setState({
      number: --this.state.number
    });
  }

  render() {
    return (
      <div>
        <div className="box" onClick={this.clickMinus}>
          -
        </div>
        <div>{this.state.number}</div>
        <div className="box" onClick={this.clickPlus}>
          +
        </div>
      </div>
    );
  }
}

export default Box;
// export default props => {
//   return (
//     <div className="box">{props.children}</div>
//   )
// }
