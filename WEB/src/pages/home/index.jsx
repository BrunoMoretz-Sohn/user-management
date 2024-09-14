import Trash from '../../assets/trash1.svg'
import './style.css'

function Home() {
  

  return (
   
    <div className='container'>
      <form>
        <h1>Cadastro de Usuários</h1>
        <input placeholder="Nome" name='nome' type='text' />
        <input placeholder="Email" name='email' type='email' />
        <input placeholder="Data de Nascimento" name='data de nascimento' type='date' />
        <button type='button'>Cadastrar</button>
      </form>

    {users.map((user) => (

      <div key={user.id} className="card">
        <div>
          <p>Nome: <span>{user.name}</span> </p>
          <p>Email: <span>{user.email}</span> </p>
          <p>Data de Nascimento: <span>{user.birthDate}</span> </p>
        </div>
        <button>
          <img src={Trash} />
        </button>
      </div>


    ))}

    </div>
  )
}

export default Home
