import React from "react";
import Table from "react-bootstrap/Table";
import Aoux from "../../../../Hoc/Aoux";
const Summary = () => {



return (
    <div>
    <h2 >SUMMARY</h2>
    <Table className = 'summ' bordered striped hovered

    >
        <thead>
        <tr>
            <th rowSpan='2'>month</th>
            <th colSpan='3'>watter </th>
            <th colSpan='3'>electricity </th>
            <th rowSpan='2'>total paid value</th>
        </tr>
        <tr>
            <th>for pay</th>
            <th>paid</th>
            <th>debt</th>
            <th>for pay</th>
            <th>paid</th>
            <th>debt</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        </tbody>
    </Table>
    </div>

)
}


export default Summary;
