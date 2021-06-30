import prisma from "../../../client.ts";

export default async (req, res) => {
  if (req.method !== "POST")
    return res
    .status(405)
    .json({ message: "Request method Tidak Diijinkan" });
  const produk = JSON.parse(req.body);
  const update = await prisma.produk.update({
    where: {
      id:produk.id,
    },
    data: {
        jenisProduk:produk.jenisProduk,
        hargaProduk:produk.hargaProduk,
        deskripsiProduk:produk.deskripsiProduk,
        labelProduk:produk.labelProduk,
        gambarProduk:produk.gambarProduk,
        kategoriProduk:produk.kategoriProduk
    },
  });
  res.json(update);
};