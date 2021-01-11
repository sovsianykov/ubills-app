import React from "react";
import './Invoice.css'
import Aoux from "../Hoc/Aoux";
import PropTypes from  'prop-types'


const Invoice =(props)=> {


 return (
     <Aoux>
    <div className="invoice-box">
        <table cellPadding="0" cellSpacing="0">
           <tbody>
           <tr className="top">
               <td colSpan="2">
                   <table>
                       <tbody>
                       <tr>
                           <td className="title">
                               <h2>Invoice</h2>
                           </td>

                           <td>
                               {/*Invoice #: 123<br>*/}
                               Created: {props.date}
                               {/*Due: February 1, 2015*/}
                           </td>
                       </tr>
                       </tbody>
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
           </tbody>

           <tbody>
           <tr className="details">
               <td>
                   Check
               </td>

               <td>
                   1000
               </td>
           </tr>
           </tbody>

            <tbody>
            <tr className="heading">
                <td>
                    Item
                </td>

                <td>
                    Price
                </td>
            </tr>
            </tbody>

          <tbody>
          <tr className="item">
              <td>
                  Electricity
              </td>

              <td>
                  {props.pay} UAH
              </td>
          </tr>
          </tbody>

           <tbody>
           <tr className="item">
               <td>
                   Watter
               </td>

               <td>
                   {props.payW} UAH
               </td>
           </tr>
           </tbody>

           <tbody>
           <tr className="item last">
               <td>
                   Total for all months
               </td>

               <td>
                   {props.total} UAH
               </td>
           </tr>
           </tbody>


        </table>
    </div>
     </Aoux>
)
}
Invoice.propTypes  = {

    pay: PropTypes.oneOfType([ PropTypes.string,
        PropTypes.number]),
    payW: PropTypes.oneOfType([ PropTypes.string,
        PropTypes.number]),

    date: PropTypes.string.isRequired,
    total: PropTypes.number.isRequired
}
export default Invoice;
