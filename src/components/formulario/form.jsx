import React from "react";
import './form.css';


export function CadastroForm  ({text}){
  return(
    <div className = "cadastro-form">
    <form>
        <div>
            <p htmlFor ="email">{text}</p>
            <input id = "title" name = "title" type = "text"/>
        </div>
        
    </form>
    
</div>
  )
};


