import prisma from "../../../client.ts";

export default async (req, res) => {
  if (req.method !== "POST")
    return res
      .status(405)
      .json({ message: "Request method Tidak Diijinkan" });
  const kategori = JSON.parse(req.body);
  const update = await prisma.kategori.update({
    where: {
      idKtg: Number(kategori.idKtg),
    },
    data: {
      jenisKtg: kategori.jenisKtg
    },
  });
  res.json(update);
};