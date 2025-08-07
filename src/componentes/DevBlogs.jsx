// src/componentes/DevBlogs.jsx
export default function DevBlogs() {
  const videos = [
    {
      titulo: "DevBlog 1 - Firebase en comentarios",
      url: "https://www.youtube.com/watch?v=97coLVdzuwc"
    },
    {
      titulo: "DevBlog 2 - creacion de gymfit y descripcion",
      url: "https://www.youtube.com/watch?v=Oyqk_owCShw"
    },
    {
      titulo: "DevBlog 3 - triptico con implementacion de tailwind",
      url: "https://www.youtube.com/watch?v=NCGlwC3qGms"
    }
  ];

  return (
    <section
      id="devblogs"
      className="bg-[#120907] text-white py-16 px-6 border-t-4 border-[#1f99d9]"
    >
      <h3 className="text-3xl font-bold text-center text-[#1f99d9] mb-12 drop-shadow">
        📹 DevBlogs
      </h3>

      <div className="grid gap-10 md:grid-cols-2 max-w-6xl mx-auto">
        {videos.map((video, index) => (
          <div
            key={index}
            className="bg-[#12253a] rounded-xl shadow-lg p-6 border border-[#20d9d8] hover:scale-105 transition-transform"
          >
            <h4 className="text-xl font-semibold text-[#20d9d8] mb-4">{video.titulo}</h4>
            <a
              href={video.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#1f99d9] text-white px-4 py-2 rounded shadow hover:bg-[#20d9d8] transition"
            >
              Ver en YouTube
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
