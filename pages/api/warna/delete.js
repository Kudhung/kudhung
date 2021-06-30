import prisma from "../../../client.ts";

export default async (req, res) => {
  if (req.method !== "POST")
    return res.status(405).json({ message: "Request method Tidak Diijinkan" });
  const warna = JSON.parse(req.body);

  const del = await prisma.warna.delete({
    where: {
      idColor:warna.idColor,
    },
  })
  res.json(del);
};