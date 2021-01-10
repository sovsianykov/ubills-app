import React from "react";
import './Invoice.css'
import Aoux from "../Hoc/Aoux";
const Invoice =(props)=> {


 return (
     <Aoux>
    <div className="invoice-box">
        <table cellPadding="0" cellSpacing="0">
            <tr className="top">
                <td colSpan="2">
                    <table>
                        <tr>
                            <td className="title">
                                <h2>My Invoice</h2>
                            </td>

                            <td>
                                {/*Invoice #: 123<br>*/}
                                {/*Created: January 1, 2015<br>*/}
                                {/*Due: February 1, 2015*/}
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>

            <tr className="information">
                <td colSpan="2">

                </td>
            </tr>

            <tr className="heading">
                <td>
                    Payment Method
                </td>

                <td>
                    Check #
                </td>
            </tr>

            <tr className="details">
                <td>
                    Check
                </td>

                <td>
                    1000
                </td>
            </tr>

            <tr className="heading">
                <td>
                    Item
                </td>

                <td>
                    Price
                </td>
            </tr>

            <tr className="item">
                <td>
                    Electricity
                </td>

                <td>
                    {props.total}
                </td>
            </tr>

            <tr className="item">
                <td>
                    Hosting (3 months)
                </td>

                <td>
                    $75.00
                </td>
            </tr>

            <tr className="item last">
                <td>
                    Domain name (1 year)
                </td>

                <td>
                    $10.00
                </td>
            </tr>

            <tr className="total">
                <td>

                </td>

                <td>
                    Total: $385.00
                </td>
            </tr>
        </table>
    </div>
     </Aoux>
)
}
export default Invoice;
