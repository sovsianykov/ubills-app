import React,{Component} from "react";
import Aoux from "../../../Hoc/Aoux";
import Elektro from "./Elektricity/Elektro";
import Watter from "./Watter/Watter";
import Summary from './Summary/Summary';

class Tabbuilder extends Component {

    render() {

        return (
            <Aoux>
                {this.props.child}
                <Summary/>



                    <div className='Builder'>
                        <Watter/>
                    </div>
                    <div className='Builder'>
                    <Elektro />
                    </div>
            </Aoux>
        )
    }
}
export default Tabbuilder;
