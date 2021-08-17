import React, { useState } from 'react';
import { CadastroForm } from '../../components/formulario/form';
import { Radio } from '../../components/radio-buton/radion-button';
import './style.css';
import { Fone } from '../../components/fone/fone';
import { InputTel } from '../../components/input-tel/input-tel';
import InputMask from 'react-input-mask';
import { Data } from '../../components/data/data';
import FormFinal from '../../components/formularioFinal/formFinal';



function App () {
  const [fone, setFone] = useState('')
  const [campo, setCampo] = useState ('fixo')
  const [email, setEmail]= useState('')
  const [confirmEmail, setConfirmEmail] = useState('')
  const [nome, setNome] = useState('')
  const [sobrenome, setSobrenome] = useState('')
  const [cpf, setCpf] = useState('')
  const [dataNascimento, setDataNascimento] = useState('')
  const [genero, setGenero] = useState('')
  return (
    <>
    <form className = "primeiro" onSubmit = {(event) => {event.preventDefault() 
    setEmail ( email ) 
    setNome (nome)
    
    setFone (fone)
    setCpf(cpf)
    setDataNascimento(dataNascimento)
    setGenero(genero) 
  }  }
    >
      <div className = "one">
      <CadastroForm text = "Email" id = "title1" name = "title1" type = "email" placeholder="seuemail@gmail.com"
        onChange = {(event)=> setEmail(event.target.value)} 
      />
      <CadastroForm text = "Confirme o Email" id = "title2" name = "title2" type = "confirme" placeholder="seuemail@gmail.com"
      />
      <CadastroForm text = "Nome" id = "title3" name = "title3" type = "nome" placeholder="Davi"
        onChange = {(event)=>setNome(event.target.value)}
      />
      <CadastroForm text = "Sobrenome" id = "title4" name = "title4" type = "sobrenome" placeholder="Brelaz"
        onChange = {(event)=>setSobrenome(event.target.value)}
       />
      <CadastroForm text = "CPF" mask = "999.999.999-99" id = "title5" name = "title5" type = "cpf" placeholder="012.345.678-90" 
      onChange = {(event)=>setCpf(event.target.value)}
      />
       
      <p >Telefone</p>
      <section className = "fone">
     
      <div className = "telfone" >
       
         <Fone onChange = {(event) => setCampo (event.target.value)}
         fixo = 'fixo'  
         celular = "celular"
         />
         </div>.
         <InputMask className = "campTel" mask = {campo === "fixo" ? "(99)9999-9999" : "(99)99999-9999" }
         onChange = {(event) => setFone (event.target.value) } value = {fone}
         />
         
      </section>


      <div className ="genDate"><p>Gênero</p><p className = "genDate2">Data de nascimento</p></div>
      <section className = "radio-button">
        <div>
      <Radio genero="Masculino"/>
      <Radio genero="Feminino"/>
      <Radio genero="Outros"/>
       </div>
       <div className = "datanasc">
         
         <Data text = "Data de Nascimento" mask = "00/00/0000" placeholder = "00/00/0000"/>
         onChange = {(event)=> setDataNascimento(event.target.value)}
         

       </div>
      </section>
       
      </div>

      <input className = "button1" type="submit" value="Concluir" class="enviar"></input>

    </form>
      
      <section className = "formFinal">
        
        <FormFinal value = {email} />
        <FormFinal value = {nome + " " + sobrenome} />
        <FormFinal value = {fone} />
        <FormFinal value = {cpf} />
        
        

      </section>
      </>
  )
}

export default App;