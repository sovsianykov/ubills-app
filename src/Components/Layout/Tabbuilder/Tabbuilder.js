import React, { Component } from "react";
import Aoux from "../../../Hoc/Aoux";
import Elektro from "./Elektricity/Elektro";
import Watter from "./Watter/Watter";
import TabbuilderLayout from "./TabbuilderLayout";
import Summary from "./Summary/Summary";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
class Tabbuilder extends Component {
  total = 0;
  store = [
    [
      { id: "" },
      { monthsel: "" },
      { preV: "" },
      { curV: "" },
      { tariff: "" },
      { pay: "" },
      { date: "" },
    ],
  ];

  state = {
    monthsEl: [
      [
        { id: Date.now() + Math.random() },
        { monthsel: "" },
        { preV: 0 },
        { curV: 0 },
        { tariff: "1.68 UAH" },
        { pay: 0 },
        { date: "" },
      ],
    ],
    monthsEl1: [
      [
        { id: Date.now() + Math.random() },
        { monthsel: "" },
        { preV: "wait" },
        { curV: "wait" },
        { tariff: "1.68 UAH" },
        { pay: "0" },
        { date: "" },
      ],
    ],

    storeW: [
      { idW: 1 },
      { monthseW: "" },
      { preW: 0 },
      { curW: 0 },
      { tariff: 1.68 },
      { payW: 0 },
      { dateW: 0 },
    ],
  };
  saveHandler = () => {
    const input = document.querySelectorAll(".elinput");
    const mon = document.querySelector("#el-select ");
    const date = document.querySelector("#date ");
    let pay = Math.floor(
      (parseInt(input[2].textContent) - parseInt(input[1].textContent)) * 1.68
    );
    if (isNaN(pay)) {
      pay = "please input correct values";
    }

    this.total += pay;
    let i = this.store.length;
    this.store[i] = [
      { id: Date.now() + Math.random() },
      { monthsel: mon.value },
      { preV: input[1].textContent },
      { curV: input[2].textContent },
      { tariff: "1.68 UAH" },
      { pay: pay },
      { date: date.value },
    ];

    this.setState(() => {
      return {
        monthsEl1: [
          [
            { id: input[0].textContent },
            { monthsel: mon.value },
            { preV: input[2].textContent },
            { curV: input[3].textContent },
            { tariff: "1.68 UAH" },
            { pay: pay },
            { date: date.value },
          ],
        ],
      };
    });
  };
  storeW = [
    [
      { idW: "" },
      { monthseW: "" },
      { preW: "" },
      { curW: "" },
      { tariffW: "" },
      { payW: "" },
      { dateW: "" },
    ],
  ];

  saveHandlerW = () => {
    const input1 = document.querySelectorAll(".editW");
    const monW = document.querySelector("select ");
    const dateW = document.querySelector("#dateW ");

    let payW = Math.floor(
      (parseInt(input1[2].textContent) - parseInt(input1[1].textContent)) * 22.9
    );
    if (isNaN(payW)) {
      payW = "please input correct values";
    }
    this.total += payW;
    let j = this.storeW.length;
    this.storeW[j] = [
      { idW: Date.now() + Math.random() },
      { monthseW: monW.value },
      { preW: input1[1].textContent },
      { curW: input1[2].textContent },
      { tariffW: "1.68 UAH" },
      { payW: payW },
      { dateW: dateW.value },
    ];

    this.setState(() => {
      return {
        monthsEl1: [
          [
            { id: input1[0].textContent },
            { monthsel: monW.value },
            { preV: input1[2].textContent },
            { curV: input1[3].textContent },
            { tariff: "1.68 UAH" },
            { pay: payW },
            { date: dateW.value },
          ],
        ],
      };
    });
  };

  render() {
    return (
      <Aoux>
        <TabbuilderLayout>
          <Summary total={this.total} />
          <Table id="electro" bordered hover>
            <thead>
              <tr>
                <th colSpan="7">
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
                <td className="elinput" contentEditable />

                <td>
                  <select id="el-select">
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
                <td className="elinput" contentEditable />
                <td className="elinput" contentEditable />
                <td>1.68 UAH</td>
                <td>

                </td>
                <td>
                  <input className="elinput" id="date" type="date" />
                </td>
              </tr>
              {this.store.map((month) => {
                return (
                  <Elektro
                    key={month[0].id}
                    monthsel={month[1].monthsel}
                    preV={month[2].preV}
                    curV={month[3].curV}
                    tariff={month[4].tariff}
                    pay={month[5].pay}
                    date={month[6].dateW}
                  />
                );
              })}
            </tbody>
          </Table>
          <Button
            id="elBtn"
            variant="outline-info"
            onClick={this.saveHandler.bind(this)}
          >
            SET THE MONTH
          </Button>
          <Table id="watter" bordered hover>
            <thead>
              <tr>
                <th colSpan="7">
                  <h3>Watter bill </h3>
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
              <tr className="editw">
                <td className="editW" contentEditable />
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
                <td className="editW" contentEditable />
                <td className="editW" contentEditable />
                <td className="editW">22.9 UAH</td>
                <td>

                </td>
                <td>
                  <input id="dateW" type="date" />
                </td>
              </tr>
              {this.storeW.map((month1) => {
                return (
                  <Watter
                    month1={this.storeW}
                    key={month1[0].idW}
                    monthseW={month1[1].monthseW}
                    preW={month1[2].preW}
                    curW={month1[3].curW}
                    tariffW={month1[4].tariffW}
                    payW={month1[5].payW}
                    dateW={month1[6].dateW}
                  />
                );
              })}
            </tbody>
          </Table>
          <Button variant="outline-info" onClick={this.saveHandlerW.bind(this)}>
            SAVE THE MONTH
          </Button>
        </TabbuilderLayout>
      </Aoux>
    );
  }
}
export default Tabbuilder;
