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
              <h3 id="s">Summary :</h3>
            </th>
            <th></th>

            <td id="t"> total paid : {this.props.total} UAH</td>

          </tr>


          </thead>
          <tbody>

          </tbody>
        </Table>
      </div>
    );
  }
}
export default Summary;

