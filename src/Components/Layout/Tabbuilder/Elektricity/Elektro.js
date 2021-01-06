import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";

import Cell from "react-bootstrap";
import Aoux from "../../../../Hoc/Aoux";

class Elektro extends Component {
  state = {
    monthsEl: [
      { id: 1 },
      { monthsel: "" },
      { preV: 0 },
      { curV: 0 },
      { tariff: "1.68 UAH" },
      { pay: 0 },
      { date: "" },
      { id: 2 },
      { monthsel: "" },
      { preV: 0 },
      { curV: 0 },
      { tariff: "1.68 UAH" },
      { pay: 0 },
      { date: "" },
      { id: 3 },
      { monthsel: "" },
      { preV: 0 },
      { curV: 0 },
      { tariff: 1.68 },
      { pay: 0 },
      { date: "" },
    ],
  };
  saveHandler = () => {
    const input = document.querySelectorAll("tr.edit td");
    const mon = document.querySelector("select ");
    let pay =
      (parseInt(input[3].textContent) - parseInt(input[2].textContent)) * 1.68;
    // this.state.monthsEl.unshift(0[,0[,0[,0,0,0,0)

    this.setState((state) => {
      return {
        monthsEl: [
          { id: input[0].textContent },
          { monthsel: mon.value },
          { preV: input[2].textContent },
          { curV: input[3].textContent },
          { tariff: "1.68 UAH" },
          { pay: pay },
          { date: input[6].textContent },
        ],
      };
    });
  };
  saveHandler2 = () => {
    this.state.monthsEl.unshift(
      { id: 0 },
      { monthsel: 0 },
      { preV: 0 },
      { curV: 0 },
      { tariff: "1.68 UAH" },
      { pay: 0 },
      { date: 0 }
    );
    console.log(this.state.monthsEl);
  };

  render() {
    return (
      <Aoux>
        <h2>Electricity bill </h2>
        <Table bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Month</th>
              <th>Prev value</th>
              <th>Current value</th>
              <th>tariff ( for kwt/h)</th>
              <th>pay (uah) </th>
              <th>date</th>
            </tr>
          </thead>
          <tbody>
            <tr className="edit">
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
              <td>1.68 UAH</td>

              <td contentEditable />
              <td>
                <input type="date" />
              </td>
            </tr>
            <tr>
              <td>{this.state.monthsEl[0].id}</td>
              <td>{this.state.monthsEl[1].monthsel}</td>
              <td>{this.state.monthsEl[2].preV}</td>
              <td>{this.state.monthsEl[3].curV}</td>
              <td>1.68 UAH</td>
              <td>{this.state.monthsEl[5].pay}</td>
              <td>{this.state.monthsEl[6].date}</td>
            </tr>
            <tr>
              {/*<td>{this.state.monthsEl[0].id}</td>*/}
              {/*<td>{this.state.monthsEl[8].monthsel}</td>*/}
              {/*<td>{this.state.monthsEl[9].preV}</td>*/}
              {/*<td>{this.state.monthsEl[10].curV}</td>*/}
              {/*<td>1.68</td>*/}
              {/*<td>{this.state.monthsEl[11].pay}</td>*/}
              {/*<td>{this.state.monthsEl[12].date}</td>*/}
            </tr>
            <tr>
              {/* <td>4</td>*/}
              {/* <td>jan</td>*/}
              {/*<td>0</td>*/}
              {/*<td>0</td>*/}
              {/*<td>1.68</td>*/}
              {/*<td>0</td>*/}
              {/*<td><input type='date'/></td>*/}
            </tr>
          </tbody>
        </Table>
        <Form>
          <Form.Row>
            <Col>
              <Button
                variant="outline-info"
                onClick={this.saveHandler.bind(this)}
              >
                SAVE THE MONTH
              </Button>
            </Col>
            <Col>
              {/*<Button variant='outline-info' onClick = {this.saveHandler2.bind(this)}  >SAVE </Button>*/}
            </Col>
          </Form.Row>
        </Form>
      </Aoux>
    );
  }
}
export default Elektro;
