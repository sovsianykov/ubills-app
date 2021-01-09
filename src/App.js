import React, { Component } from "react";
import Tabbuilder from "./Components/Layout/Tabbuilder/Tabbuilder";
import Container from 'react-bootstrap/Container/'
import Layout from "./Components/Layout/Layout";
import Invoice from "./Invoice/Invoice";
import {BrowserRouter,Route,Link} from "react-router-dom";
import MyLinks from "./Components/Navigate/LinkContainer";
// const history =createBrowserHistory();



// const Home =()=> (
// <div>
//     <h2>Home</h2>
// </div>
// )
// const General =()=> (
//     <div>
//         <h2>General</h2>
//     </div>
// )
// const Invoicing =()=> (
//     <div>
//         <h2>Invoicing </h2>
//     </div>
// )


class App extends Component {
  render() {
    return (
        <BrowserRouter  >
            <Container>
          <Layout>
            <h1>my U-Bills</h1>
              <MyLinks/>
            {/*<Tabbuilder/> */}
            {/*    <Invoice/>*/}
          </Layout>
            </Container>
        </BrowserRouter>
    );
  }
}

export default App;
