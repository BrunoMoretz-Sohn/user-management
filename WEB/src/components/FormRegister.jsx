import '../pages/home/style.css';
import { useRef, useState } from 'react';
import { RiCalendar2Line, RiAccountBoxLine, RiAtLine } from "react-icons/ri";

function FormRegister({ onSubmit }) {
  const inputName = useRef();
  const inputEmail = useRef();
  const inputBirthDate = useRef();
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const validateEmail = (email) => {
    return email.includes('@');
  };

  const handleSubmit = () => {
    const name = inputName.current.value;
    const email = inputEmail.current.value;
    const birthDate = inputBirthDate.current.value;


    if (!validateEmail(email)) {
      setError('Digite um email válido!');
      return; 
    }

    onSubmit(name, email, birthDate);
    setMessage('Usuário cadastrado com sucesso!');
    setError(''); 

   
    inputName.current.value = '';
    inputEmail.current.value = '';
    inputBirthDate.current.value = '';

  
    setTimeout(() => {
      setMessage('');
    }, 3000);  
  };

  return (
    <form>
      <header>
        <h1>Cadastro de Usuários</h1>
        <p>Preencha os campos abaixo para cadastrar um novo usuário.</p>
      </header>
      <div className="input-container">
        <RiAccountBoxLine className="input-icon" />
        <input placeholder="Nome" id="name" name="name" type='text' autoComplete="off" ref={inputName} />
      </div>
      <div className="input-container">
        <RiAtLine className="input-icon" />
        <input placeholder="Email" id="email" name="email" type='email' autoComplete="off" ref={inputEmail} />
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div className="input-container">
        <RiCalendar2Line className="input-icon" />
        <input placeholder="Data de Nascimento" id="birthDate" name="birthDate" type='date' ref={inputBirthDate} />
      </div>
      <button type='button' onClick={handleSubmit}>Cadastrar</button>
      {message && <p>{message}</p>}
    </form>
  );
}

export default FormRegister;
