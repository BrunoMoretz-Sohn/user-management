import '../pages/home/style.css';
import { RiCalendar2Line } from "react-icons/ri";
import { RiAccountBoxLine } from "react-icons/ri";
import { RiAtLine } from "react-icons/ri";

function FormEdicao({ user, editName, setEditName, editEmail, setEditEmail, editBirthDate, setEditBirthDate, onSave, onCancel }) {
  
  const handleCancel = () => {
    onCancel();  
    window.location.reload();  
  };

  return (
    <form className="edit-form">
      <header>
        <h1>Editar Usuário</h1>
        <p>Confirme as alterações clicando em "Atualizar".</p>
      </header>
      <div className="input-container">
        <RiAccountBoxLine className="input-icon" />
        <input
          type='text'
          id="editName" 
          name="editName" 
          value={editName}
          onChange={(e) => setEditName(e.target.value)}
          placeholder='Nome'
        />
      </div>
      <div className="input-container">
        <RiAtLine className="input-icon" />
        <input
          type='email'
          id="editEmail" 
          name="editEmail" 
          value={editEmail}
          onChange={(e) => setEditEmail(e.target.value)}
          placeholder='Email'
        />
      </div>
      <div className="input-container">
        <RiCalendar2Line className="input-icon" />
        <input
          type='date'
          id="editBirthDate" 
          name="editBirthDate" 
          value={editBirthDate}
          onChange={(e) => setEditBirthDate(e.target.value)}
          placeholder='Data de Nascimento'
        />
      </div>
      <button type='button' onClick={onSave}>Atualizar</button>
      <button type='button' onClick={handleCancel}>Cancelar</button>
    </form>
  );
}

export default FormEdicao;
