import { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const habilidades = [
  'HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS',
  'Firebase', 'Git & GitHub', 'SQL / NoSQL',
  'SCRUM', 'Vite', 'VirtualBox', 'Django'
];

export default function Habilidades() {
  const [mostrar, setMostrar] = useState(false);

  return (
    <section id="habilidades" className="py-16 text-center text-white bg-transparent relative">
      <h2 className="text-3xl font-bold text-cyan-400 mb-6">Habilidades</h2>

      <button
        onClick={() => setMostrar(!mostrar)}
        className="bg-[#1f99d9] hover:bg-[#20d9d8] text-white font-semibold py-2 px-6 rounded-full transition duration-300 shadow-md"
      >
        {mostrar ? 'Ocultar habilidades' : 'Mostrar habilidades'}
      </button>

      {mostrar && (
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto px-4">
          {habilidades.map((hab, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 bg-[#12253a] border border-[#1f99d9] rounded-xl py-3 px-4 justify-center hover:scale-105 transition shadow-sm"
            >
              <FaStar className="text-[#20d9d8]" />
              <span className="text-base font-medium text-white">{hab}</span>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
