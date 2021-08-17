import React from "react";
import ReactInputMask from "react-input-mask";
import './form.css';


export function CadastroForm  ({text, ...outros}){
  return(
    <div className = "cadastro-form">
    <form>
        <div>
            <p htmlFor ="email">{text}</p>
            <ReactInputMask {...outros}/>
        </div>
        
    </form>
    
</div>
  )
};


