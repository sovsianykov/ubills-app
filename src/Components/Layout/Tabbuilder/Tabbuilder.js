import React,{Component} from "react";
import Aoux from "../../../Hoc/Aoux";
import Elektro from "./Elektricity/Elektro";
import Watter from "./Watter/Watter";
import TabbuilderLayout from "./TabbuilderLayout";
import Summary from "./Summary/Summary";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
class Tabbuilder extends Component {
    total = 0
    store = [[
        { id: '' },
        { monthsel:''  },
        { preV: '' },
        { curV: '' },
        { tariff: '' },
        { pay: ''},
        { date:'' },
    ]  ];

    stateW = {
        monthsEl:[ [
            { id: Date.now() + Math.random() },
            { monthsel: "" },
            { preV: 0 },
            { curV: 0 },
            { tariff: "1.68 UAH" },
            { pay: 0 },
            { date: "" }

        ] ],
        monthsEl1 : [[
            { id:  Date.now() + Math.random()},
            { monthsel: '' },
            { preV: 'wait' },
            { curV: 'wait' },
            { tariff: "1.68 UAH" },
            { pay: '0' },
            { date: '' },
        ]  ],

        monthsW: [
            { idW: 1 },
            { monthseW: "" },
            { preW: 0 },
            { curW: 0 },
            { tariff: 1.68 },
            { payW: 0 },
            { dateW: "" },

        ]
    };
    saveHandler = () => {
        const input = document.querySelectorAll("tr.edit td")
        const mon = document.querySelector("#el-select ")
        const date = document.querySelector("#date ")
        let pay =
       Math.floor((parseInt(input[3].textContent) - parseInt(input[2].textContent)) * 1.68)
        if (isNaN(pay)) { pay = 'please input correct values'}

        this.total += pay
         let i = this.store.length
        this.store[i] = [
            { id: Date.now() + Math.random() },
            { monthsel: mon.value },
            { preV: input[2].textContent },
            { curV: input[3].textContent },
            { tariff: "1.68 UAH" },
            { pay: pay },
            { date: date.value },
        ];

        this.setState(() => {
            return {
                monthsEl1 : [[
                    { id: input[0].textContent },
                    { monthsel: mon.value },
                    { preV: input[2].textContent },
                    { curV: input[3].textContent },
                    { tariff: "1.68 UAH" },
                    { pay: pay },
                    { date: date.value },
                ]  ]
            }
        })




    }

    saveHandlerW = () => {
        const input1 = document.querySelectorAll("tr.editW td");
        const monW = document.querySelector("select ");
        const dateW = document.querySelector("#dateW ");


        let payW =
          Math.floor((parseInt(input1[3].textContent) - parseInt(input1[2].textContent)) *
            22.9);
        if (isNaN(payW)) { payW = 'please input correct values'}
        this.total += payW
        let i = this.storeW.length
        this.storeW[i] = [
            { id: Date.now() + Math.random() },
            { monthsel: monW.value },
            { preV: input1[2].textContent },
            { curV: input1[3].textContent },
            { tariff: "1.68 UAH" },
            { pay: payW },
            { date: dateW.value },
        ];

        this.setState(() => {
            return {
                monthsW: [
                    { idW: input1[0].textContent },
                    { monthseW: monW.value },
                    { preW: input1[2].textContent },
                    { curW: input1[3].textContent },
                    { tariff: "1.68" },
                    { payW: payW },
                    { dateW: dateW.value },
                ],
            };
        });
    };



    render() {


        return (
            <Aoux>
                <TabbuilderLayout>
                    <Summary

                        total = {this.total}
                    />
                    <Table className = 'electro' bordered hover>
                        <thead>
                        <tr >

                            <th colSpan='7'>
                                <h3>Electricity bill </h3>

                            </th>
                        </tr>
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
                                <select id='el-select'>
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
                        {this.store.map(month => {
                            return <Elektro
                                key = {month[0].id}
                                monthsel = { month[1].monthsel}
                                preV = { month[2].preV}
                                curV= { month[3].curV}
                                tariff = { month[4].tariff}
                                pay = { month[5].pay}
                                date = { month[6].date}
                            />
                        }) }

                        </tbody>
                    </Table>

                    <Button id = 'elBtn'
                        variant="outline-info"
                        onClick={this.saveHandler.bind(this)}
                    >
                        SET THE MONTH
                    </Button>
                    {/*<Watter*/}
                    {/*    idW = { this.state.monthsW[0].idW}*/}
                    {/*    monthseW = { this.state.monthsW[1].monthseW}*/}
                    {/*    preW = { this.state.monthsW[2].preW}*/}
                    {/*    curW= { this.state.monthsW[3].curW}*/}
                    {/*    tariff = { this.state.monthsW[4].tariff}*/}
                    {/*    payW = { this.state.monthsW[5].payW}*/}
                    {/*    dateW = { this.state.monthsW[6].dateW}  />*/}
                    <Button
                        variant="outline-info"
                        onClick={this.saveHandlerW.bind(this)}
                    >
                        SAVE THE MONTH
                    </Button>
                </TabbuilderLayout>
            </Aoux>
        )
    }
}
export default Tabbuilder;
