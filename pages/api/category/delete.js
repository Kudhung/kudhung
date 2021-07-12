import prisma from "../../../client.ts";

export default async (req, res) => {
  if (req.method !== "POST")
    return res.status(405).
      json({ message: "Request method Tidak Diijinkan" });
  const kategori = JSON.parse(req.body);
  const del = await prisma.kategori.delete({
    where: {
      idKtg: kategori.idKtg,
    },
  })
  res.json(del);
};