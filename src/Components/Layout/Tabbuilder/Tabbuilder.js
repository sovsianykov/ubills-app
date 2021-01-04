import React,{Component} from "react";
import DataGridElektricity from "./Elektricity/Electricity";
import Aoux from "../../../Hoc/Aoux";
import Card from '@material-ui/core/Card/Card/'
class Tabbuilder extends Component {

    render() {

        return (
            <Aoux>
                <Card>
                    <h2>Electricity bill </h2>
                    <DataGridElektricity  />
                </Card>
            </Aoux>
        )
    }
}
export default Tabbuilder;
