import prisma from "../../../client.ts";

export default async (req, res) => {
  if (req.method !== "POST")
    return res.status(405).json({ message: "Request method Tidak Diijinkan" });
  const promo = JSON.parse(req.body);

  const del = await prisma.promo.delete({
    where: {
      idPromo: promo.idPromo,
    },
  })
  res.json(del);
};