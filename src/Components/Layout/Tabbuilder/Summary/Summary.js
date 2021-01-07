import React, { Component } from "react";
import Table from "react-bootstrap/Table";

class Summary extends Component {
  render() {
    return (
      <div>

        <Table className="summ">
          <thead>
          <tr >

            <th colSpan='7'>
              <h3 id="s">Summary</h3>

            </th>
          </tr>
          <tr>
              <th rowSpan="2">month</th>
              <th colSpan="2">Electricity</th>
              <th colSpan="2">Watter</th>
              <th rowSpan="2" colSpan="3">
                Total paid
              </th>
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
              <td>{this.props.payW}</td>
              <td>{this.props.dateW}</td>
              <td id="t">{this.props.total} UAH</td>
              <td>

              </td>
              <td>

              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}
export default Summary;
