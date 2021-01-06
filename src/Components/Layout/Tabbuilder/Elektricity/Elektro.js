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
              <td >

              </td>
              <td>
                <input id='date' type="date" />
              </td>
            </tr>
            <tr>
              <td>{this.props.id}</td>
              <td>{this.props.monthsel}</td>
              <td>{this.props.preV}</td>
              <td>{this.props.curV}</td>
              <td>1.68 UAH</td>
              <td>{this.props.pay}</td>
              <td>{this.props.date}</td>
            </tr>
          </tbody>
        </Table>
        <Form>
          <Form.Row>
            <Col>

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
