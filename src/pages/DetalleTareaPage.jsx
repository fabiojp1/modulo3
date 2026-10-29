import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useTareasStore } from "../store/tareasStore";
import { estilos } from "../shared/estilos";

export const DetalleTareaPage = () => {
 


  const { id } = useParams();
  const navigate = useNavigate();
  const idNumerico = Number(id);

  const tareas = useTareasStore((state) => state.tareas);
  const editarTarea = useTareasStore((state) => state.editarTarea);
  const toggleCompletada = useTareasStore((state) => state.toggleCompletada);

  const tarea = tareas.find((t) => t.id === idNumerico);

  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");

  useEffect(() => {
    if (tarea) {
      setTitulo(tarea.titulo);
      setDescripcion(tarea.descripcion);
    }
  }, [tarea]);

  if (!tarea) {
    return (
      <div>
        <p>La tarea no existe.</p>
        <Link to="/" style={estilos.linkVolver}>
          Volver al inicio
        </Link>
      </div>
    );
  }

  const guardarCambios = (evento) => {
    evento.preventDefault(); 

    if (!titulo.trim()) {
      return;
    }

    editarTarea(idNumerico, titulo.trim(), descripcion.trim());
    navigate("/");
  };

  return (
    <div>
      <Link to="/" style={estilos.linkVolver}>
        Volver al inicio
      </Link>

      <h3>Detalle de tarea {tarea.id}</h3>
      <p>Estado {tarea.completada ? "Completada" : "Pendiente"}</p>

      <form onSubmit={guardarCambios}>
        <label>Titulo: </label>
        <input
          type="text"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        />
        <br />
        <br />

        <label>Descripcion: </label>
        <br />
        <textarea
          value={descripcion}
          rows={4}
          onChange={(e) => setDescripcion(e.target.value)}
        />
        <br />
        <br />

        <button type="submit">Guardar cambios</button>
        <button type="button" onClick={() => toggleCompletada(tarea.id)}>
          {tarea.completada ? "Marcar pendiente" : "Marcar completada"}
        </button>
      </form>
    </div>
  );
};
