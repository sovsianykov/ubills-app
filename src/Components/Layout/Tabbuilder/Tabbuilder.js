import React,{Component} from "react";
import Aoux from "../../../Hoc/Aoux";
import Elektro from "./Elektricity/Elektro";
import Watter from "./Watter/Watter";
class Tabbuilder extends Component {

    render() {

        return (
            <Aoux>



                    <div>
                        <Watter/>
                    </div>
                    <div>
                    <Elektro />
                    </div>
            </Aoux>
        )
    }
}
export default Tabbuilder;
