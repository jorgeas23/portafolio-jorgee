
export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0c1b2f]/80 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center text-white">
        <h1 className="text-xl font-bold text-[#20d9d8]">Portafolio Jorge</h1>
        <ul className="flex space-x-6 font-semibold">
          <li><a href="#inicio" className="hover:text-[#20d9d8]">Inicio</a></li>
          <li><a href="#habilidades" className="hover:text-[#20d9d8]">Habilidades</a></li>
          <li><a href="#devblogs" className="hover:text-[#20d9d8]">DevBlogs</a></li>
          <li><a href="#proyectos" className="hover:text-[#20d9d8]">Proyectos</a></li>
          <li><a href="#contacto" className="hover:text-[#20d9d8]">Contacto</a></li>
        </ul>
      </div>
    </nav>
  );
}
