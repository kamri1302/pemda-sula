import { berita } from "../route";

export async function GET(req, { params }) {
  const id = parseInt(params.id);
  const item = berita.find((b) => b.id === id);

  if (!item) {
    return Response.json({ error: "Berita tidak ditemukan" }, { status: 404 });
  }

  return Response.json(item);
}
