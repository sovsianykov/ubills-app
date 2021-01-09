import React, { Component } from "react";
import "./Navigation.css";
import Tabbuilder from "../Layout/Tabbuilder/Tabbuilder";
import Elektro from "../Layout/Tabbuilder/Elektricity/Elektro";
import { Route } from "react-router-dom";
import home from "./Img/home.jpg";
import Invoice from "../../Invoice/Invoice";
import Table from "react-bootstrap/Table";
class MyLinks extends Component {
  // total = 0;
  // store = [
  //     [
  //         { id: "" },
  //         { monthsel: "" },
  //         { preV: "" },
  //         { curV: "" },
  //         { tariff: "" },
  //         { pay: "" },
  //         { date: "" },
  //     ],
  // ];
  // storeW = [
  //     [
  //         { idW: "" },
  //         { monthseW: "" },
  //         { preW: "" },
  //         { curW: "" },
  //         { tariffW: "" },
  //         { payW: "" },
  //         { dateW: "" },
  //     ],
  // ];
  // componentDidMount() {
  //     if (localStorage.getItem("storedtotal")) {
  //         this.store = JSON.parse(localStorage.getItem("storedstore"));
  //         this.storeW = JSON.parse(localStorage.getItem("storedstoreW"));
  //         this.total = JSON.parse(localStorage.getItem("storedtotal"));
  //     }
  // }
  //
  // state = {
  //     monthsEl: [
  //         [
  //             { id: Date.now() + Math.random() },
  //             { monthsel: "" },
  //             { preV: 0 },
  //             { curV: 0 },
  //             { tariff: "1.68 UAH" },
  //             { pay: 0 },
  //             { date: "" },
  //         ],
  //     ],
  //     monthsEl1: [
  //         [
  //             { id: Date.now() + Math.random() },
  //             { monthsel: "" },
  //             { preV: "wait" },
  //             { curV: "wait" },
  //             { tariff: "1.68 UAH" },
  //             { pay: "0" },
  //             { date: "" },
  //         ],
  //     ],
  //
  //     storeW: [
  //         { idW: 1 },
  //         { monthseW: "" },
  //         { preW: 0 },
  //         { curW: 0 },
  //         { tariff: 1.68 },
  //         { payW: 0 },
  //         { dateW: 0 },
  //     ],
  // };
  // saveHandler = () => {
  //     const input = document.querySelectorAll(".elinput");
  //     const mon = document.querySelector("#el-select ");
  //     const date = document.querySelector("#date ");
  //     let pay = Math.floor(
  //         (parseInt(input[2].textContent) - parseInt(input[1].textContent)) * 1.68
  //     );
  //     if (isNaN(pay)) {
  //         pay = "please input correct values";
  //     }
  //
  //     this.total += pay;
  //     let i = this.store.length;
  //     this.store[i] = [
  //         { id: Date.now() + Math.random() },
  //         { monthsel: mon.value },
  //         { preV: input[1].textContent },
  //         { curV: input[2].textContent },
  //         { tariff: "1.68 UAH" },
  //         { pay: pay },
  //         { date: date.value },
  //     ];
  //
  //     this.setState(() => {
  //         return {
  //             monthsEl1: [
  //                 [
  //                     { id: input[0].textContent },
  //                     { monthsel: mon.value },
  //                     { preV: input[2].textContent },
  //                     { curV: input[3].textContent },
  //                     { tariff: "1.68 UAH" },
  //                     { pay: pay },
  //                     { date: date.value },
  //                 ],
  //             ],
  //         };
  //     });
  // };
  // enterHandler = () => {
  //     const enter = document.querySelector(".enter");
  //     const eBtn = document.querySelector("#enter-btn");
  //     eBtn.className = "none";
  //     enter.classList.remove("none");
  //     this.setState(() => {
  //         return {
  //             monthsEl1: [[{ id: 0 }]],
  //         };
  //     });
  // };
  //
  // saveHandlerW = () => {
  //     const input1 = document.querySelectorAll(".editW");
  //     const monW = document.querySelector("select ");
  //     const dateW = document.querySelector("#dateW ");
  //
  //     let payW = Math.floor(
  //         (parseInt(input1[2].textContent) - parseInt(input1[1].textContent)) * 22.9
  //     );
  //     if (isNaN(payW)) {
  //         payW = "please input correct values";
  //     }
  //     this.total += payW;
  //     let j = this.storeW.length;
  //     this.storeW[j] = [
  //         { idW: Date.now() + Math.random() },
  //         { monthseW: monW.value },
  //         { preW: input1[1].textContent },
  //         { curW: input1[2].textContent },
  //         { tariffW: "1.68 UAH" },
  //         { payW: payW },
  //         { dateW: dateW.value },
  //     ];
  //
  //     this.setState(() => {
  //         return {
  //             monthsEl1: [
  //                 [
  //                     { id: input1[0].textContent },
  //                     { monthsel: monW.value },
  //                     { preV: input1[2].textContent },
  //                     { curV: input1[3].textContent },
  //                     { tariff: "1.68 UAH" },
  //                     { pay: payW },
  //                     { date: dateW.value },
  //                 ],
  //             ],
  //         };
  //     });
  // };
  // componentDidUpdate(prevProps, prevState, snapshot) {
  //     localStorage.setItem("storedstore", JSON.stringify(this.store));
  //     localStorage.setItem("storedstoreW", JSON.stringify(this.storeW));
  //     localStorage.setItem("storedtotal", JSON.stringify(this.total));
  // }

  render() {
    return (
      <div className="Main">
        <header id="nav">
          <h1>my U-Bills</h1>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/general">General</a>
            </li>
            <li>
              <a href="/electro">Electricity</a>
            </li>
            <li>
              <a href="/invoic">Invoice</a>
            </li>
          </ul>
        </header>
        <section className="Home">
          <Route
            path="/"
            render={() => (
              <div className="im">
                <img src={home} alt="asde" />
              </div>
            )}
          />
        </section>
        <section className="General">
          <Route path="/general" render={() => <Tabbuilder />} />
        </section>
        <section className="Electro">
          <div>
            <Table>
              <tbody>
                <Route path="/electro" render={() => <Elektro />} />
              </tbody>
            </Table>
          </div>
        </section>
        <section className="General">
          <Route path="/invoic" render={() => <Invoice />} />
        </section>
      </div>
    );
  }
}
export default MyLinks;
