import '../pages/home/style.css';
import { useRef } from 'react';
import { RiCalendar2Line } from "react-icons/ri";
import { RiAccountBoxLine } from "react-icons/ri";
import { RiAtLine } from "react-icons/ri";


function FormCadastro({ onSubmit }) {
  const inputName = useRef();
  const inputEmail = useRef();
  const inputBirthDate = useRef();

  const handleSubmit = () => {
    onSubmit(inputName.current.value, inputEmail.current.value, inputBirthDate.current.value);

    inputName.current.value = '';
    inputEmail.current.value = '';
    inputBirthDate.current.value = '';
  };

  return (
    <form>
      <header>
        <h1>Cadastro de Usuários</h1>
        <p>Preencha os campos abaixo para cadastrar um novo usuário.</p>
      </header>
      <div className="input-container">
        <RiAccountBoxLine className="input-icon" />
        <input placeholder="Nome" id="name" name="name" type='text'  autoComplete="off" ref={inputName} />
      </div>
      <div className="input-container">
        <RiAtLine className="input-icon" />
        <input placeholder="Email" id="email" name="email" type='email'  autoComplete="off"  ref={inputEmail} />
      </div>
      <div className="input-container">
        <RiCalendar2Line className="input-icon" />
        <input placeholder="Data de Nascimento" id="birthDate" name="birthDate" type='date' ref={inputBirthDate} />
      </div>
        <button type='button' onClick={handleSubmit}>Cadastrar</button>
    </form>
  );
}

export default FormCadastro;
