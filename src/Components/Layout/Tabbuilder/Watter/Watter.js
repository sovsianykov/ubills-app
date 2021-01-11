import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Aoux from "../../../../Hoc/Aoux";
import PropTypes from  'prop-types'
import Elektro from "../Elektricity/Elektro";

class Watter extends Component {

  render() {
    return (
      <Aoux>
        <tr>
          <td>{this.props.idW}</td>
          <td>{this.props.monthseW}</td>
          <td className='fin'>{this.props.preW}</td>
          <td className='fin'>{this.props.curW}</td>
          <td>22.9 UAH</td>
          <td>{this.props.payW}</td>
          <td>{this.props.dateW}</td>
        </tr>
      </Aoux>
    );
  }
}
Watter.propTypes  = {
  preW: PropTypes.string.isRequired,
  curW: PropTypes.string.isRequired,
  payW: PropTypes.oneOfType([ PropTypes.string,
    PropTypes.number]),
  dateW: PropTypes.string.isRequired
}
export default Watter;

