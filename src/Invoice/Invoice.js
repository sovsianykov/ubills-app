import React from "react";
import './Invoice.css'
import Aoux from "../Hoc/Aoux";
const Invoice =(props)=> {


 return (
     <Aoux>
    <div className="invoice-box">
        <table cellPadding="0" cellSpacing="0">
           <tbody>
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
                  {props.total}
              </td>
          </tr>
          </tbody>

           <tbody>
           <tr className="item">
               <td>
                   Watter
               </td>

               <td>
                   $00.00
               </td>
           </tr>
           </tbody>

           <tbody>
           <tr className="item last">
               <td>
                   Total
               </td>

               <td>
                   $0.00
               </td>
           </tr>
           </tbody>


        </table>
    </div>
     </Aoux>
)
}
export default Invoice;
