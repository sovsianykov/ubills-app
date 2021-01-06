import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import Aoux from "../../../../Hoc/Aoux";
class Summary extends Component {
  render() {
    return (
      <Aoux>
        <Table className="summ">
          <thead>
            <tr>
              <th rowSpan="2">month</th>
              <th colSpan="2">Electricity</th>
              <th colSpan="2">Watter</th>
              <th rowSpan="2">Total paid</th>
            </tr>
            <tr>
              <th>for pay</th>
              <th>date</th>
              <th>for pay</th>
              <th>date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{this.props.monthsel}</td>

              <td>{this.props.pay} </td>
              <td>{this.props.date} </td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </Table>
      </Aoux>
    );
  }
}
export default Summary;
