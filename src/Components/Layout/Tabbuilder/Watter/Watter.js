import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Aoux from "../../../../Hoc/Aoux";

class Watter extends Component {

  render() {
    return (
      <Aoux>
        <tr>
          <td>{this.props.idW}</td>
          <td>{this.props.monthseW}</td>
          <td>{this.props.preW}</td>
          <td>{this.props.curW}</td>
          <td>22.9 UAH</td>
          <td>{this.props.payW}</td>
          <td>{this.props.dateW}</td>
        </tr>
      </Aoux>
    );
  }
}
export default Watter;

