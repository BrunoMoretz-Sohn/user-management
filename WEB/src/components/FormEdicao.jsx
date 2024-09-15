import '../pages/home/style.css';

function FormEdicao({ user, editName, setEditName, editEmail, setEditEmail, editBirthDate, setEditBirthDate, onSave, onCancel }) {
  
  const handleCancel = () => {
    onCancel();  
    window.location.reload();  
  };

  return (
    <form className="edit-form">
      <h1>Editar Usuário</h1>
      <input
        type='text'
        value={editName}
        onChange={(e) => setEditName(e.target.value)}
        placeholder='Nome'
      />
      <input
        type='email'
        value={editEmail}
        onChange={(e) => setEditEmail(e.target.value)}
        placeholder='Email'
      />
      <input
        type='date'
        value={editBirthDate}
        onChange={(e) => setEditBirthDate(e.target.value)}
        placeholder='Data de Nascimento'
      />
      <button type='button' onClick={onSave}>Atualizar</button>
      <button type='button' onClick={handleCancel}>Cancelar</button>
    </form>
  );
}

export default FormEdicao;
