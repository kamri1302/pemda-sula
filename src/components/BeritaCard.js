import Image from "next/image";

export default function BeritaCard({ berita }) {
  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-4 cursor-pointer">
      <Image
        src={berita.image}
        alt={berita.title}
        width={500}
        height={300}
        className="rounded-lg mb-4 w-full h-48 object-cover"
        loading="lazy"
      />
      <h2 className="text-lg font-bold mb-2">{berita.title}</h2>
      <p className="text-gray-600 text-sm">{berita.date}</p>
      <p className="text-gray-800 mt-2">{berita.excerpt}</p>
    </div>
  );
}
