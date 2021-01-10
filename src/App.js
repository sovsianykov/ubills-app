import React, { Component } from "react";
import Tabbuilder from "./Components/Layout/Tabbuilder/Tabbuilder";
import Container from "react-bootstrap/Container/";
import Layout from "./Components/Layout/Layout";
import { BrowserRouter } from "react-router-dom";
import "./Components/Navigate/Navigation.css";
import Aoux from "./Hoc/Aoux";

class App extends Component {
  render() {
    return (
      <Aoux>
        <BrowserRouter>
          <Container>
            <Layout>
              <Tabbuilder />
            </Layout>
          </Container>
        </BrowserRouter>
      </Aoux>
    );
  }
}

export default App;
