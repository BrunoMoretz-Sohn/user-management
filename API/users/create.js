import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const createUser = async (req, res) => {
  try {
    const user = await prisma.user.create({
      data: {
        name: req.body.name,
        email: req.body.email,
        birthDate: req.body.birthDate
      }
    });
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar usuário' });
  }
};
