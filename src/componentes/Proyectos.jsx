export default function Proyectos() {
  return (
    <section id="proyectos" className="py-16 px-6 bg-[#0e1726] text-white">
      <h3 className="text-3xl font-semibold text-center mb-10 text-cyan-400 drop-shadow">
        Proyectos
      </h3>

      <div className="grid gap-8 md:grid-cols-2 max-w-6xl mx-auto">
        {/* Proyecto ParkAmigo */}
        <div className="bg-[#0b1c2c] p-6 rounded-lg border border-[#1f99d9] shadow-md hover:shadow-[#1f99d9] transition">
          <img
            src="/src/assets/parkamigo-logo.png"
            alt="ParkAmigo"
            className="w-full h-40 object-contain rounded mb-4 bg-black"
          />
          <h4 className="text-xl font-bold text-[#20d9d8] mb-2">ParkAmigo</h4>
          <p className="text-white mb-4">
            Sistema de reservación de espacio para estacionamiento. Permite que los usuarios se registren y disfruten los beneficios del software.
            Este proyecto cuenta con App Móvil y Escritorio.
          </p>
          <a
            href="https://github.com/TU_USUARIO/ParkAmigo" // ← Reemplaza TU_USUARIO
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#1f99d9] text-white font-semibold px-4 py-2 rounded shadow hover:bg-[#20d9d8] transition"
          >
            Ver código
          </a>
        </div>

        {/* Proyecto Gestor de Tareas */}
        <div className="bg-[#0b1c2c] p-6 rounded-lg border border-[#1f99d9] shadow-md hover:shadow-[#1f99d9] transition">
          <img
            src="/src/assets/gestor.png"
            alt="Gestor de tareas"
            className="w-full h-40 object-contain rounded mb-4 bg-black"
          />
          <h4 className="text-xl font-bold text-[#20d9d8] mb-2">Gestor de tareas</h4>
          <p className="text-white mb-4">
            Aplicación web para gestionar tareas de manera eficiente. Permite crear, editar y eliminar actividades. Ideal para mantener la organización personal o en equipos de trabajo.
          </p>
          <a
            href="https://github.com/TU_USUARIO/GestorTareas" // ← Reemplaza TU_USUARIO
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#1f99d9] text-white font-semibold px-4 py-2 rounded shadow hover:bg-[#20d9d8] transition"
          >
            Ver código
          </a>
        </div>
      </div>
    </section>
  );
}
