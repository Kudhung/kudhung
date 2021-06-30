import prisma from "../../../client.ts";

export default async (req, res) => {
  if (req.method !== "POST")
    return res.status(405).json({ message: "Request method Tidak Diijinkan" });
  const gambar = JSON.parse(req.body);

  const del = await prisma.gambar.delete({
    where: {
      idGmbr:gambar.idGmbr,
    },
  })
  res.json(del);
};