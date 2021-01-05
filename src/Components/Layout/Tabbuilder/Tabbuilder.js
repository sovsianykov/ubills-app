import React,{Component} from "react";
import Aoux from "../../../Hoc/Aoux";
import Elektro from "./Elektricity/Elektro";
class Tabbuilder extends Component {

    render() {

        return (
            <Aoux>

                    <h2>Electricity bill </h2>
                    <Elektro  />

            </Aoux>
        )
    }
}
export default Tabbuilder;
