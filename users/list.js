import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const listAllUsers = async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao listar usuários' });
  }
};


export const getUserById = async (req, res) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: req.params.id
      },
    });

    if (!user) {
      return res.status(404).json({ error: 'Usuário não encontrado' });
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar usuário' });
  }
};


export const searchUser = async (req, res) => {
  try {
    const { name, email } = req.query;

    const whereConditions = {};
    if (name) {
      whereConditions.name = name;
    }
    if (email) {
      whereConditions.email = email;
    }

    const user = await prisma.user.findFirst({
      where: whereConditions,
    });

    if (!user) {
      return res.status(404).json({ error: 'Usuário não encontrado' });
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar usuário' });
  }
};
