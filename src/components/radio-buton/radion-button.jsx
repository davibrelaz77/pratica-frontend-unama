import React from "react";


export function Radio ({genero}){
    return(
        <div className = "radio-tel">
        <input type="radio" name = "genero" />
        <label>{genero}</label>
        
        </div>
    )

};