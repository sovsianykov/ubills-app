import React, { Component } from "react";
import Tabbuilder from "./Components/Layout/Tabbuilder/Tabbuilder";
import Container from 'react-bootstrap/Container/'
import Layout from "./Components/Layout/Layout";
import Invoice from "./Invoice/Invoice";
class App extends Component {
  render() {
    return (
        <Container   >
          <Layout>
            <h1>my U-Bills</h1>
            <Tabbuilder/>
            {/*    <Invoice/>*/}
          </Layout>
        </Container>
    );
  }
}

export default App;
