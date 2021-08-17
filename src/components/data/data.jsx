import React from "react";
import ReactInputMask from "react-input-mask";


export function Data ({date, ...outros}){
    return(
        <div className = "datanas">
        <form>
          <div> 
           <p htmlFor = "nasc">{date}  </p>
           <ReactInputMask {...outros}/>
         </div>
        </form>

        </div>
    )
};