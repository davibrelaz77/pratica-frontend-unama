import React from "react";


export function Fone ({fixo, celular, ...outros}){
    return(
    
    <div >
        <select className = "estilo-fone" {...outros} >
            
            <option value = "fixo">{fixo}</option>
            <option value = "celular">{celular}</option>
            
        </select> 

    </div>

  )   
}

