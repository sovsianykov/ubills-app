import React,{Component} from "react";
import Aoux from "../../../Hoc/Aoux";
import Elektro from "./Elektricity/Elektro";
import Watter from "./Watter/Watter";
import TabbuilderLayout from "./TabbuilderLayout";
import Summary from "./Summary/Summary";
import Button from "react-bootstrap/Button";
class Tabbuilder extends Component {
    total = 0
    state = {
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
        const input = document.querySelectorAll("tr.edit td");
        const mon = document.querySelector("select ")[1];
        const date = document.querySelector("#date ");
        let pay =
       Math.floor((parseInt(input[3].textContent) - parseInt(input[2].textContent)) * 1.68)
        if (isNaN(pay)) { pay = 'please input correct values'}

        this.total += pay

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
        });
         this.state.monthsEl.push(this.state.monthsEl1[0])


    };
    saveHandlerW = () => {
        const input1 = document.querySelectorAll("tr.editW td");
        const monW = document.querySelector("select ");
        const dateW = document.querySelector("#dateW ");


        let payW =
          Math.floor((parseInt(input1[3].textContent) - parseInt(input1[2].textContent)) *
            22.9);
        if (isNaN(payW)) { payW = 'please input correct values'}
        this.total += payW

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
                     {this.state.monthsEl.map(month => {
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
                    <Button
                        variant="outline-info"
                        onClick={this.saveHandler.bind(this)}
                    >
                        SAVE THE MONTH
                    </Button>
                    <Watter
                        idW = { this.state.monthsW[0].idW}
                        monthseW = { this.state.monthsW[1].monthseW}
                        preW = { this.state.monthsW[2].preW}
                        curW= { this.state.monthsW[3].curW}
                        tariff = { this.state.monthsW[4].tariff}
                        payW = { this.state.monthsW[5].payW}
                        dateW = { this.state.monthsW[6].dateW}  />
                    <Button
                        variant="outline-info"
                        onClick={this.saveHandlerW.bind(this)}
                    >
                        SAVE THE MONTH
                    </Button>
                    <Summary
                             monthsel = { this.state.monthsEl[0][1].monthsel}
                             pay = { this.state.monthsEl[0][5].pay}
                             date = { this.state.monthsEl[0][6].date}
                             payW = { this.state.monthsW[5].payW}
                             dateW = { this.state.monthsW[6].dateW}
                             total = {this.total}
                    />



                </TabbuilderLayout>
            </Aoux>
        )
    }
}
export default Tabbuilder;
