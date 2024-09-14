import '../pages/home/style.css';
function FormBusca({ onSearch, searchParam, setSearchParam }) {
  return (
    <form>
      <h1>Buscar Usuários</h1>
      <input
        placeholder="ID, Nome ou Email"
        type='text'
        value={searchParam}
        onChange={(e) => setSearchParam(e.target.value)}
      />
      <button type='button' onClick={onSearch}>Buscar</button>
    </form>
  );
}

export default FormBusca;
