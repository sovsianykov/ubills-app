import React ,{Component} from "react";
import Table from 'react-bootstrap/Table'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form} from 'react-bootstrap'
import {Col} from 'react-bootstrap'
import Button from 'react-bootstrap/Button'


import Cell from 'react-bootstrap'
import Aoux from "../../../../Hoc/Aoux";


class Elektro extends Component {

    state = {
        monthsEl : [
            {id : 1,},
            {monthsel: 'jan'},
            {preV: 56},
            {curV: 53},
            {tariff: 1.68} ,
            {pay: 0},
            {date: ''}

        ]
    }
 saveHandler = ()=> {
     const input = document.querySelectorAll('tr.edit td')

     this.setState({
         monthsEl : [
             {id : input[0].textContent},
             {monthsel: input[1].textContent},
             {preV: input[2].textContent},
             {curV: input[3].textContent},
             {tariff: input[4].textContent} ,
             {pay: input[5].textContent},
             {date: input[6].textContent}

         ]
         }

     )

 }

    render() {
        return (
            <Aoux>
                <Table  striped bordered hover >
                    <thead>
                   <tr>

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
                    <tr className= 'edit'>

                        <td >input template</td>
                         <td contentEditable/>
                        <td contentEditable/>
                        <td contentEditable/>
                        <td contentEditable/>
                        <td contentEditable/>
                        <td><input type='date'/></td>

                    </tr><tr>
                         <td>{this.state.monthsEl[0].id}</td>
                         <td>{this.state.monthsEl[1].monthsel}</td>
                        <td>{this.state.monthsEl[2].preV}</td>
                        <td>{this.state.monthsEl[3].curV}</td>
                        <td>1.68</td>
                        <td>{this.state.monthsEl[4].pay}</td>
                        <td>{this.state.monthsEl[5].pay}</td>

                    </tr><tr>

                         <td>5</td>
                         <td>jan</td>
                        <td>0</td>
                        <td>0</td>
                        <td>1.68</td>
                        <td>0</td>
                        <td><input type='date'/></td>

                    </tr><tr>
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
                        <Form.Control id = 'id' placeholder="ID "   />
                    </Col>
                        <Col>
                            <Form.Control id = 'm' placeholder="Month" />
                        </Col>
                        <Col>
                            <Form.Control id= 'cv' placeholder="Current value "   />
                        </Col>
                        <Col>
                            <Form.Control id= 'pv'  placeholder="Prev value" />
                        </Col>
                        <Col>
                            <Form.Control  id= 'date'  type ='date'   />
                        </Col>
                        <Col>
                            <Button variant='outline-info' onClick = {this.saveHandler.bind(this)}  >SAVE THE MONTH</Button>
                        </Col>

                    </Form.Row>
                </Form>

                </Aoux>
        )
    }

}
export default Elektro;
