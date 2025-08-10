export async function GET() {
  const data = [
    { id: 1, label: "Jumlah Desa", value: "78" },
    { id: 2, label: "Penduduk", value: "100.000+" },
    { id: 3, label: "Program Berjalan", value: "25" },
    { id: 4, label: "Pelayanan Publik", value: "100+" },
  ];

  return new Response(JSON.stringify(data), {
    headers: { "Content-Type": "application/json" },
  });
}
