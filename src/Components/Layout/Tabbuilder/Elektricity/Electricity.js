import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import Aoux from "../../../../Hoc/Aoux";

let calcpay = function (params) {
     return    (params.getValue('cv') - params.getValue('pv'))*params.getValue('tariff')

}
const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'month', headerName: 'Month ', width: 130 },
    { field: 'pv', headerName: 'Prev value',type: 'number', width: 130 },
    {
        field: 'cv',
        headerName: 'Current Value',
        type: 'number',
        width: 150,
        editable: 'true'
    },
    {
        field: 'tariff',
        headerName: 'tariff (uah for kW/h)',
        type: 'number',
        width: 190,
    },
    {
        field: 'pay',
        headerName: ' pay ',
        // description: 'This column has a value getter and is not sortable.',
        // sortable: false,yp
        // type : 'number',
        width: 160,
        valueGetter : calcpay

    },
    {
        field: 'date',
        headerName: 'date',
        type:
        'date',
        width: 190,
    },
];

const rows = [
    { id: 1, month: 'jan', pv: 33470 , cv: 33500, tariff:  1.68 , date: '01-09-2018' },
    { id: 2, month: 'feb', pv: 33470 , cv: 33500, tariff:  1.68 , date: '01-09-2018' },
    { id: 3, month: 'mar', pv: 33470 , cv: 33500, tariff:  1.68 , date: '01-09-2018' },
    { id: 4, month: 'apr', pv: 33470 , cv: 33500, tariff:  1.68 , date: '01-09-2018' },
    { id: 5, month: 'may', pv: 33470 , cv: 33500, tariff:  1.68 , date: '01-09-2018' },
    { id: 6, month: 'jun', pv: 33470 , cv: 33500, tariff:  1.68 , date: '01-09-2018' },
    { id: 7, month: 'jul', pv: 33470 , cv: 33500, tariff:  1.68 , date: '01-09-2018' },
    { id: 8, month: 'aug', pv: 33470 , cv: 33500, tariff:  1.68 , date: '01-09-2018' },
    { id: 9, month: 'sep', pv: 33470 , cv: 33500, tariff:  1.68 , date: '01-09-2018' },
    { id: 10, month: 'oct', pv: 33470 , cv: 33500, tariff:  1.68 , date: '01-09-2018' },
    { id: 11, month: 'nov', pv: 33470 , cv: 33500, tariff:  1.68 , date: '01-09-2018' },
    { id: 12, month: 'dec', pv: 33470 , cv: 33500, tariff:  1.68 , date: '01-09-2018' },

];
 const changed1 =(event)=>{
console.log(rows[event.target.value])
 }






export default function DataGridElektricity() {

    return (
        <Aoux>
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid   rows={rows} columns={columns} pageSize={5} checkboxSelection

            onCellHover   enableCellSelect={true}             />

        </div>
        <div>
            <form >
                <input type="text" onClick={changed1}/>
            </form>
        </div>
        </Aoux>

    );
}
