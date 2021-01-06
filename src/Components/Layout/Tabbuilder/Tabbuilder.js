import React,{Component} from "react";
import Aoux from "../../../Hoc/Aoux";
import Elektro from "./Elektricity/Elektro";
import Watter from "./Watter/Watter";
import TabbuilderLayout from "./TabbuilderLayout";
import Summary from "./Summary/Summary";
import Button from "react-bootstrap/Button";
import {Col} from "react-bootstrap";
class Tabbuilder extends Component {
    state = {
        monthsEl: [
            { id: 1 },
            { monthsel: "" },
            { preV: 0 },
            { curV: 0 },
            { tariff: "1.68 UAH" },
            { pay: 0 },
            { date: "" }

        ],
    };
    saveHandler = () => {
        const input = document.querySelectorAll("tr.edit td");
        const mon = document.querySelector("select ")[1];
        const date = document.querySelector("#date ");
        let pay =
            (parseInt(input[3].textContent) - parseInt(input[2].textContent)) * 1.68;


        this.setState(() => {
            return {
                monthsEl: [
                    { id: input[0].textContent },
                    { monthsel: mon.value },
                    { preV: input[2].textContent },
                    { curV: input[3].textContent },
                    { tariff: "1.68 UAH" },
                    { pay: pay },
                    { date: date.value },
                ],
            };
        });
    };



    render() {


        return (
            <Aoux>
                <TabbuilderLayout>
                    <Summary
                             monthsel = { this.state.monthsEl[1].monthsel}
                             pay = { this.state.monthsEl[5].pay}
                             date = { this.state.monthsEl[6].date}  />
                        {/*<Button variant ='outline-info' onClick={this.set.bind(this)}   >Get Summary</Button>*/}
                        <Watter/>


                        <Elektro id = { this.state.monthsEl[0].id}
                         monthsel = { this.state.monthsEl[1].monthsel}
                         preV = { this.state.monthsEl[2].preV}
                         curV= { this.state.monthsEl[3].curV}
                        tariff = { this.state.monthsEl[4].tariff}
                         pay = { this.state.monthsEl[5].pay}
                        date = { this.state.monthsEl[6].date}  />
                    <Button
                        variant="outline-info"
                        onClick={this.saveHandler.bind(this)}
                    >
                        SAVE THE MONTH
                    </Button>
                </TabbuilderLayout>
            </Aoux>
        )
    }
}
export default Tabbuilder;
