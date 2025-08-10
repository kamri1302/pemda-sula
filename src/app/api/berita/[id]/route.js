import { beritaTable, beritaMeta, mediaTable } from "../route";

export async function GET(req, context) {
  const { id } = await context.params;

  const berita = beritaTable.find((b) => b.ID === parseInt(id));
  if (!berita) {
    return new Response(JSON.stringify({ error: "Berita tidak ditemukan" }), {
      status: 404,
    });
  }

  const thumbMeta = beritaMeta.find(
    (meta) => meta.berita_id === berita.ID && meta.meta_key === "_thumbnail_id"
  );

  const media =
    thumbMeta &&
    mediaTable.find((m) => m.media_id === parseInt(thumbMeta.meta_value));

  return Response.json({
    ...berita,
    image: media ? `/${media.file_path}` : null,
  });
}
