import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Aoux from "../../../../Hoc/Aoux";

class Elektro extends Component {



  render() {
    return (
      <Aoux>
             <tr>
              <td>{this.props.id}</td>
              <td>{this.props.monthsel}</td>
              <td>{this.props.preV}</td>
              <td>{this.props.curV}</td>
              <td>{this.props.tariff}</td>
              <td>{this.props.pay}</td>
              <td>{this.props.date}</td>
             </tr>
      </Aoux>
    );
  }
}
export default Elektro;
