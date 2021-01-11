import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Aoux from "../../../../Hoc/Aoux";
import PropTypes from 'prop-types'


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
Elektro.propTypes  = {
  preV: PropTypes.string.isRequired,
  curV: PropTypes.string.isRequired,
  pay: PropTypes.oneOfType([ PropTypes.string,
    PropTypes.number]),
  date: PropTypes.string.isRequired
}
export default Elektro;
