import yo from '../assets/yo.jpg';

export default function Presentacion() {
  return (
    <section className="text-white py-20 px-6 text-center border-y-4 border-cyan-400">
      <div className="flex justify-center">
        <img
          src={yo}
          alt="Foto de Jorge"
          className="w-40 h-40 rounded-full object-cover border-4 border-cyan-400 shadow-md mb-6"
        />
      </div>

      <h2 className="text-3xl md:text-4xl font-bold text-cyan-400 mb-4">
        Jorge Ricardo Asencio Can
      </h2>
      <p className="text-lg text-white max-w-xl mx-auto mb-8">
        Estudiante apasionado por la tecnología, el desarrollo de software y la creación de soluciones prácticas.
      </p>

      <div className="border-2 border-cyan-400 p-4 rounded-lg max-w-xl mx-auto text-left text-sm md:text-base">
        <p>
          Hola soy <strong>Jorge Asencio</strong> y actualmente me encuentro cursando la carrera de <strong>Ingeniería en Software y sistemas computacionales</strong> la cual estudio en la universidad interamericana para el desarrollo <strong>UNID</strong>. Me interesa aprender sobre diseño de interfaces, desarrollo móvil y web, así como explorar nuevas tecnologías para resolver problemas reales.
        </p>
      </div>
    </section>
  );
}
