import Navbar from "./componentes/Navbar";
import Presentacion from "./componentes/Presentacion";
import Habilidades from "./componentes/Habilidades";
import DevBlogs from "./componentes/DevBlogs";
import Proyectos from "./componentes/Proyectos";
import Contacto from "./componentes/Contacto";
import fondo from "./assets/fondo.jpg"; 
import Comentarios from "./componentes/Comentarios";

function App() {
  return (
    <div
      className="min-h-screen text-white"
      style={{
        backgroundImage: `url(${fondo})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed", 
      }}
    >
      <Navbar />
      <Presentacion />
      <Habilidades />
      <DevBlogs />
      <Proyectos />
      <Comentarios />
      <Contacto />
    </div>
  );
}

export default App;
