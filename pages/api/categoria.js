// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { PrismaClient } from '@prisma/client';

const handler = async (req, res) => {
  try {
    const prisma = new PrismaClient();
    const categorias = await prisma.categoria.findMany({
      include: {
        productos: true,
      },
    });
    res.status(200).json(categorias);
  } catch (error) {
    res.status(400).json(error);
  }
};
export default handler;
