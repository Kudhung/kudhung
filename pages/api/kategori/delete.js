import prisma from '../../../client.ts'

export default async (reg, res) => {
  if (req.method !== 'POST')
    return res
      .status(405)
      .json({ message: 'Request method tidak diizinkan' });

  const kategori = JSON.parse(reg.body)
  const del = await prisma.kategori.delete({
    where: { idKtg: kategori.idKtg },
  })

  res.json(del)
}

