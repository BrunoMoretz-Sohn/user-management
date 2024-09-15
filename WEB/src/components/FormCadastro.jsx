import '../pages/home/style.css';
import { useRef } from 'react';

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
      <h1>Cadastro de Usuários</h1>
      <input placeholder="Nome" type='text' ref={inputName} />
      <input placeholder="Email" type='email' ref={inputEmail} />
      <input placeholder="Data de Nascimento" type='date' ref={inputBirthDate} />
      <button type='button' onClick={handleSubmit}>Cadastrar</button>
    </form>
  );
}

export default FormCadastro;
