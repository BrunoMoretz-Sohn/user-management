import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const deleteUser = async (req, res) => {
  try {
    await prisma.user.delete({
      where: {
        id: req.params.id
      },
    });
    res.status(200).json({ message: 'Usuário deletado com sucesso!' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar usuário' });
  }
};
