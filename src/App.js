import React, { Component } from "react";
import Tabbuilder from "./Components/Layout/Tabbuilder/Tabbuilder";
import Container from 'react-bootstrap/Container/'
import Layout from "./Components/Layout/Layout";
import {BrowserRouter,Route,Link ,NavLink}  from "react-router-dom";
import MyLinks from "./Components/Navigate/LinkContainer";
import home from "./Components/Navigate/Img/home.jpg";
import Table from "react-bootstrap/Table";
import Elektro from "./Components/Layout/Tabbuilder/Elektricity/Elektro";
import './Components/Navigate/Navigation.css'
import Invoice from "./Invoice/Invoice";
import Aoux from "./Hoc/Aoux";
// const history =createBrowserHistory();



class App extends Component {
  render() {
    return (
        <Aoux>
        <BrowserRouter  >
            <Container>
          <Layout>

              <div className="Main">
                  <header id="nav">
                      <h1>my U-Bills</h1>
                      <ul>

                          <li>  <NavLink to = '/'>Home  </NavLink></li>

                          <li>
                              <NavLink to="/general">Table</NavLink>
                          </li>
                          <li>
                              <NavLink to="/electro">Electricity</NavLink>
                          </li>
                          <li>
                              <NavLink to ="/invoic">Invoice</NavLink>
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
                  <section className="Invoice">
                      <Route path="/invoic" render={() => <Invoice total = {this.total}
                      />} />

                  </section>
              </div>
          </Layout>
            </Container>
        </BrowserRouter>
        </Aoux>
    );
  }
}

export default App;
