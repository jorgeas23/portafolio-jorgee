 import parkamigoLogo from '../assets/parkamigo-logo.png';
import gestorLogo from '../assets/gestor.png';
import gudeImg from '../assets/GUDE.png';

export default function Proyectos() {
  return (
    <section id="proyectos" className="py-16 px-6 bg-[#0e1726] text-white">
      <h3 className="text-3xl font-semibold text-center mb-10 text-cyan-400 drop-shadow">
        Proyectos
      </h3>

      <div className="grid gap-8 md:grid-cols-2 max-w-6xl mx-auto">
       {/* Proyecto ParkAmigo */}
  <div className="bg-[#0b1c2c] p-6 rounded-lg border border-cyan-500 shadow-md hover:shadow-cyan-500 transition">
    <img
      src={parkamigoLogo}
      alt="ParkAmigo"
      className="w-full h-40 object-contain rounded mb-4 bg-black"
    />
    <h4 className="text-xl font-bold text-cyan-400 mb-2">ParkAmigo</h4>
    <p className="text-white mb-4">
      Sistema de reservación de espacio para estacionamiento. Permite que
      los usuarios se registren y disfruten los beneficios del software.
      Este proyecto cuenta con App Móvil y Escritorio.
    </p>
    <a
      href="https://github.com/AlejandroMV03/Park-Amigo-V2.0.git" 
      target="_blank"
      rel="noopener noreferrer"
      className="bg-cyan-500 text-black font-semibold px-4 py-2 rounded shadow hover:bg-cyan-400 transition"
    >
      Ver código
    </a>
  </div>

  {/* Proyecto Gestor de tareas */}
  <div className="bg-[#0b1c2c] p-6 rounded-lg border border-cyan-500 shadow-md hover:shadow-cyan-500 transition">
    <img
      src={gestorLogo}
      alt="Gestor de tareas"
      className="w-full h-40 object-contain rounded mb-4 bg-black"
    />
    <h4 className="text-xl font-bold text-cyan-400 mb-2">Gestor de tareas</h4>
    <p className="text-white mb-4">
      Aplicación web para gestionar tareas de manera eficiente. Permite
      crear, editar y eliminar actividades. Ideal para mantener la
      organización personal o en equipos de trabajo.
    </p>
    <a
      href="https://github.com/jorgeas23/Gestor-de-tareas.git" 
      target="_blank"
      rel="noopener noreferrer"
      className="bg-cyan-500 text-black font-semibold px-4 py-2 rounded shadow hover:bg-cyan-400 transition"
    >
      Ver código
    </a>
  </div>

  {/* Proyecto GUDE */}
  <div className="bg-[#0b1c2c] p-6 rounded-lg border border-cyan-500 shadow-md hover:shadow-cyan-500 transition">
    <img
      src={gudeImg}
      alt="GUDE"
      className="w-full h-40 object-contain rounded mb-4 bg-black"
    />
    <h4 className="text-xl font-bold text-cyan-400 mb-2">GUDE</h4>
    <p className="text-white mb-4">
      En este portal, la administración busca brindar a estudiantes, docentes y personal administrativo 
      información clara, actualizada y relevante sobre actividades, noticias y procesos institucionales.
    </p>
    <a
      href="https://github.com/Jacv33C/GUDE.git"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-cyan-500 text-black font-semibold px-4 py-2 rounded shadow hover:bg-cyan-400 transition"
    >
      Ver código
    </a>
  </div>
</div>
</section> );
}