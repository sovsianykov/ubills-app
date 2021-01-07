import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import Aoux from "../../../../Hoc/Aoux";

class Watter extends Component {

  render() {
    return (
      <Aoux>
        <Table bordered hover>
          <thead>
          <tr >

            <th colSpan='7'>
              <h3>Watter bill  </h3>

            </th>
          </tr>
            <tr>
              <th>ID</th>
              <th>Month</th>
              <th>Prev value</th>
              <th>Current value</th>
              <th>tariff ( for m/c)</th>
              <th>pay (uah) </th>
              <th>date</th>
            </tr>
          </thead>
          <tbody>
            <tr className="editW">
              <td contentEditable />
              <td>
                <select name="select">
                  <option value="jnv" defaultValue="jnv">
                    jnv
                  </option>
                  <option value="feb">feb</option>
                  <option value="march">march</option>
                  <option value="apr">apr</option>
                  <option value="may">may</option>
                  <option value="jun">jun</option>
                  <option value="jul">jul</option>
                  <option value="aou">aou</option>
                  <option value="sep">sep</option>
                  <option value="oct">oct</option>
                  <option value="nov">nov</option>
                  <option value="dec">dec</option>
                </select>
              </td>
              <td contentEditable />
              <td contentEditable />
              <td>22.9 UAH</td>

              <td >

              </td>
              <td>
                <input id='dateW' type="date" />
              </td>
            </tr>
            <tr>
              <td>{this.props.idW}</td>
              <td>{this.props.monthseW}</td>
              <td>{this.props.preW}</td>
              <td>{this.props.curW}</td>
              <td>22.9 UAH</td>
              <td>{this.props.payW}</td>
              <td>{this.props.dateW}</td>
            </tr>
          </tbody>
        </Table>
      </Aoux>
    );
  }
}
export default Watter;
