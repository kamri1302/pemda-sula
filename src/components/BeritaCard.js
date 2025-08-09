import Image from "next/image";

export default function BeritaCard({ berita }) {
  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-4 cursor-pointer">
      <Image
        src={berita.image}
        alt={berita.post_title}
        width={500}
        height={300}
        className="rounded-lg mb-4 w-full h-48 object-cover"
        loading="lazy"
      />
      <h2 className="text-lg font-bold mb-2">{berita.post_title}</h2>
      <p className="text-gray-600 text-sm">
        {new Date(berita.post_date).toLocaleDateString("id-ID", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })}
      </p>
      <p className="text-gray-800 mt-2">{berita.post_excerpt}</p>
    </div>
  );
}
