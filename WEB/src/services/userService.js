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
  } catch (error) {
    console.error('Erro ao cadastrar usuário:', error);
  }
}

export async function searchUser(param) {
  try {
    // Determina a URL com base no parâmetro fornecido
    const url = param.includes('@')
      ? `/search?email=${encodeURIComponent(param)}`
      : `/search?name=${encodeURIComponent(param)}`;

    // Faz a requisição para o endpoint correto
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
    await api.delete(`/users/${id}`);
  } catch (error) {
    console.error('Erro ao deletar usuário:', error);
  }
}
