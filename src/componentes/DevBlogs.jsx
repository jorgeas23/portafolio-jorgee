export default function DevBlogs() {
  return (
    <section id="devblogs" className="py-20 bg-[#145b83] text-white">
      <h2 className="text-3xl font-bold text-center mb-10 text-[#20d9d8]">DevBlogs</h2>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto px-4">
        <div className="bg-[#12253a] p-4 rounded-lg shadow-md border border-[#1f99d9]">
          <h3 className="text-xl font-semibold mb-2">Gestor de tareas explicacion</h3>
          <p className="text-sm mb-3">Tutorial explicando los elementos del gestor de tareas y como lo cree.</p>
          <a href="https://www.youtube.com/watch?v=97coLVdzuwc" target="_blank" className="text-[#20d9d8] underline">Ver video</a>
        </div>
        
      </div>
    </section>
  );
}
