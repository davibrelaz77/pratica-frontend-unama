import React from 'react';
import { CadastroForm } from '../../components/formulario/form';
import { Radio } from '../../components/radio-buton/radion-button';
import './style.css';
import { Fone } from '../../components/fone/fone';
import { InputTel } from '../../components/input-tel/input-tel';




function App() {
  return (
    <form className = "primeiro">
      <div className = "one">
      <CadastroForm text = "Email"/>
      <CadastroForm text = "Confirme o Email"/>
      <CadastroForm text = "Nome"/>
      <CadastroForm text = "Sobrenome"/>
      <CadastroForm text = "CPF"/>
      <CadastroForm text = "Telefone"/>
      
      <section className = "fone">
         <Fone/>
         <InputTel className="campo"/>
      </section>


      <section className = "radio-button">
      <Radio genero="Masculino"/>
      <Radio genero="Feminino"/>
      <Radio genero="Outros"/>
      </section>
      </div>

    </form>
      
  )
}

export default App;