import prisma from '../../../client.ts'

export default async (reg, res) => {
  if(req.method !== 'POST')
  return res
  .status(405)
  .json({message:'Request method tidak diizinkan'});

  const Kategori = JSON.parse(reg.body)
  const deleteKategori = await prisma.Kategori.delete({
    where: { idKtg: Kategori.idKtg },
  })

  res.json(deleteKategori)
}

