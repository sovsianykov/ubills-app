import React ,{Component} from "react";
import Table from 'react-bootstrap/Table'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form} from 'react-bootstrap'
import {Col} from 'react-bootstrap'

import Cell from 'react-bootstrap'
import Aoux from "../../../../Hoc/Aoux";


class Elektro extends Component {



    render() {
        return (
            <div>
                <Table  striped bordered hover >
                    <thead>
                   <tr>
                       <th><input type='checkbox'/></th>
                       <th>ID</th>
                       <th>Month</th>
                       <th>Prev value</th>
                       <th>Current value</th>
                       <th>tariff (uah for kwt/h)</th>
                       <th>pay (uah) </th>
                       <th>date</th>
                   </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td><input type='checkbox'/></td>
                         <td>1</td>
                         <td>jan</td>
                        <td>0</td>
                        <td>0</td>
                        <td>1.68</td>
                        <td>0</td>
                        <td><input type='date'/></td>

                    </tr><tr>
                        <td><input type='checkbox'/></td>
                         <td>2</td>
                         <td>jan</td>
                        <td>0</td>
                        <td>0</td>
                        <td>1.68</td>
                        <td>0</td>
                        <td><input type='date'/></td>

                    </tr><tr>
                        <td><input type='checkbox'/></td>
                         <td>3</td>
                         <td>jan</td>
                        <td>0</td>
                        <td>0</td>
                        <td>1.68</td>
                        <td>0</td>
                        <td><input type='date'/></td>

                    </tr><tr>
                        <td><input type='checkbox'/></td>
                         <td>4</td>
                         <td>jan</td>
                        <td>0</td>
                        <td>0</td>
                        <td>1.68</td>
                        <td>0</td>
                        <td><input type='date'/></td>

                    </tr>
                    </tbody>

                </Table>
                <Form>
                    <Form.Row>
                        <Col>
                            <Form.Control placeholder="First name" />
                        </Col>
                        <Col>
                            <Form.Control placeholder="Last name" />
                        </Col>
                    </Form.Row>
                </Form>
                </div>
        )
    }

}
export default Elektro;
