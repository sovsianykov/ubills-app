import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Aoux from "../../../../Hoc/Aoux";

class Elektro extends Component {
  render() {
    return (
      <Aoux>
        <tr>
          <td>{this.props.id}</td>
          <td>{this.props.monthsel}</td>
          <td className="fin">{this.props.preV}</td>
          <td className="fin">{this.props.curV}</td>
          <td>{this.props.tariff}</td>
          <td>{this.props.pay}</td>
          <td>{this.props.date}</td>
        </tr>
      </Aoux>
    );
  }
}
export default Elektro;
