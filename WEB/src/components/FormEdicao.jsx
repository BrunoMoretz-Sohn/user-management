import '../pages/home/style.css';
function FormEdicao({ user, editName, setEditName, editEmail, setEditEmail, editBirthDate, setEditBirthDate, onSave, onCancel }) {
  return (
    <div className="edit-form">
      <h2>Editar Usuário</h2>
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
      <button type='button' onClick={onCancel}>Cancelar</button>
    </div>
  );
}

export default FormEdicao;
