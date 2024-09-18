import api from '../services/api';
import dayjs from 'dayjs';

export async function getUsers() {
  try {
    const response = await api.get('/users');
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar todos os usuários:', error);
    return [];
  }
}

export async function createUser(name, email, birthDate) {
  try {
    const birthDateISO = dayjs(birthDate).toISOString();
    await api.post('/users', { name, email, birthDate: birthDateISO });
    alert('Usuário cadastrado com sucesso!');
  } catch (error) {
    console.error('Erro ao cadastrar usuário:', error);
  }
}

export async function getUser(param) {
  try {
    const url = param.includes('@')
      ? `/search?email=${encodeURIComponent(param)}`
      : /^[a-fA-F0-9]{24}$/.test(param)
        ? `/users/${encodeURIComponent(param)}`
        : `/search?name=${encodeURIComponent(param)}`;
    
    const response = await api.get(url);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar usuário:', error);
    return null;
  }
}

export async function updateUser(id, name, email, birthDate) {
  try {
    const birthDateISO = dayjs(birthDate).toISOString();
    await api.put(`/users/${id}`, { name, email, birthDate: birthDateISO });
  } catch (error) {
    console.error('Erro ao atualizar usuário:', error);
  }
}

export async function deleteUser(id) {
  try {
    const confirmation = confirm('Tem certeza que deseja excluir esse cadastro?');
    if (confirmation) {
      await api.delete(`/users/${id}`);
      alert('Exclusão efetuada com sucesso!');
    }
  } catch (error) {
    console.error('Erro ao deletar usuário:', error);
  }
}

