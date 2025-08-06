import { useState, useEffect } from "react";
import { db } from "../FirebaseConfig";
import {
  collection,
  addDoc,
  onSnapshot,
  deleteDoc,
  doc,
  updateDoc,
  serverTimestamp
} from "firebase/firestore";

export default function Comentarios() {
  const [nombre, setNombre] = useState("");
  const [comentario, setComentario] = useState("");
  const [comentarios, setComentarios] = useState([]);
  const [respuesta, setRespuesta] = useState({});
  const [editandoId, setEditandoId] = useState(null);

  useEffect(() => {
    const unsub = onSnapshot(collection(db, "Comentarios"), (snapshot) => {
      const datos = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }));
      setComentarios(datos.sort((a, b) => b.fecha?.seconds - a.fecha?.seconds));
    });

    return () => unsub();
  }, []);

  const handleEnviar = async () => {
    if (!nombre.trim() || !comentario.trim()) return;

    await addDoc(collection(db, "Comentarios"), {
      nombre,
      comentario,
      fecha: serverTimestamp(),
      likes: 0,
      respuestas: []
    });

    setNombre("");
    setComentario("");
  };

  const handleEliminar = async (id) => {
    await deleteDoc(doc(db, "Comentarios", id));
  };

  const handleLike = async (id, currentLikes) => {
    const comentarioRef = doc(db, "Comentarios", id);
    await updateDoc(comentarioRef, { likes: currentLikes + 1 });
  };

  const handleResponder = (id, nombreUsuario) => {
    setRespuesta((prev) => ({
      ...prev,
      [id]: {
        nombre: "",
        texto: `@${nombreUsuario} `
      }
    }));
  };

  const handleEnviarRespuesta = async (id) => {
    const comentarioRef = doc(db, "Comentarios", id);
    const comentarioActual = comentarios.find((c) => c.id === id);

    if (
      !respuesta[id]?.nombre.trim() ||
      !respuesta[id]?.texto.trim()
    )
      return;

    const nuevasRespuestas = [
      ...(comentarioActual.respuestas || []),
      {
        nombre: respuesta[id].nombre,
        texto: respuesta[id].texto,
        fecha: new Date().toISOString()
      }
    ];

    await updateDoc(comentarioRef, { respuestas: nuevasRespuestas });

    setRespuesta((prev) => ({ ...prev, [id]: { nombre: "", texto: "" } }));
  };

  return (
    <section id="comentarios" className="py-12 px-6 bg-[#0e1726] text-white">
      <h3 className="text-3xl font-semibold text-center mb-6 text-cyan-400 drop-shadow">
        Comentarios
      </h3>

      <div className="max-w-3xl mx-auto space-y-4">
        <input
          className="w-full p-2 rounded bg-gray-800 text-white border border-cyan-600"
          type="text"
          placeholder="Tu nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <textarea
          className="w-full p-2 rounded bg-gray-800 text-white border border-cyan-600"
          placeholder="Escribe un comentario..."
          value={comentario}
          onChange={(e) => setComentario(e.target.value)}
        />
        <button
          className="bg-cyan-500 hover:bg-cyan-400 text-black font-bold px-4 py-2 rounded"
          onClick={handleEnviar}
        >
          Enviar comentario
        </button>

        <div className="mt-10 space-y-6">
          {comentarios.map((c) => (
            <div key={c.id} className="bg-[#112233] p-4 rounded shadow-md border border-cyan-700">
              <p className="text-cyan-300 font-semibold">{c.nombre}</p>
              <p className="mb-2">{c.comentario}</p>

              <div className="flex items-center space-x-4">
                <button
                  onClick={() => handleLike(c.id, c.likes || 0)}
                  className="text-sm text-cyan-400 hover:underline"
                >
                  ❤️ {c.likes || 0}
                </button>
                <button
                  onClick={() => handleEliminar(c.id)}
                  className="text-sm text-red-400 hover:underline"
                >
                  Eliminar
                </button>
                <button
                  onClick={() => handleResponder(c.id, c.nombre)}
                  className="text-sm text-blue-400 hover:underline"
                >
                  Responder
                </button>
              </div>

              {respuesta[c.id] && (
                <div className="mt-2 space-y-2">
                  <input
                    type="text"
                    placeholder="Tu nombre"
                    className="w-full p-1 rounded bg-gray-900 border border-cyan-500"
                    value={respuesta[c.id].nombre}
                    onChange={(e) =>
                      setRespuesta((prev) => ({
                        ...prev,
                        [c.id]: {
                          ...prev[c.id],
                          nombre: e.target.value
                        }
                      }))
                    }
                  />
                  <textarea
                    placeholder="Tu respuesta"
                    className="w-full p-1 rounded bg-gray-900 border border-cyan-500"
                    value={respuesta[c.id].texto}
                    onChange={(e) =>
                      setRespuesta((prev) => ({
                        ...prev,
                        [c.id]: {
                          ...prev[c.id],
                          texto: e.target.value
                        }
                      }))
                    }
                  />
                  <button
                    onClick={() => handleEnviarRespuesta(c.id)}
                    className="bg-cyan-500 hover:bg-cyan-400 text-black font-bold px-3 py-1 rounded"
                  >
                    Enviar respuesta
                  </button>
                </div>
              )}

              {c.respuestas?.length > 0 && (
                <div className="mt-4 ml-4 space-y-2">
                  <p className="font-semibold text-cyan-400">Respuestas:</p>
                  {c.respuestas.map((r, idx) => (
                    <div
                      key={idx}
                      className="bg-[#1a2b3c] p-2 rounded border border-cyan-800"
                    >
                      <p className="text-sm text-cyan-300">{r.nombre}</p>
                      <p className="text-sm">{r.texto}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
