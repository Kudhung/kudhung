import prisma from "../../../client.ts";

export default async (req, res) => {
  if (req.method !== "POST")
    return res
      .status(405)
      .json({ message: "Request method Tidak Diijinkan" });
  const warna = JSON.parse(req.body);
  const update = await prisma.warna.update({
    where: {
      idColor: Number(warna.idColor),
    },
    data: {
      jenisColor: warna.jenisColor
    },
  });
  res.json(update);
};