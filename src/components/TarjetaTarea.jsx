import { Link } from "react-router-dom";
import { useTareasStore } from "../store/tareasStore";
import { estilos } from "../shared/estilos";

export const TarjetaTarea = ({ tarea }) => {
  const toggleCompletada = useTareasStore((state) => state.toggleCompletada);
  const eliminarTarea = useTareasStore((state) => state.eliminarTarea);

 
  const estiloTarjeta = {
    ...estilos.tarjeta,
    opacity: tarea.completada ? 0.7 : 1,
  };

  return (
    <div style={estiloTarjeta}>
      <h4 style={{ textDecoration: tarea.completada ? "line-through" : "none" }}>
        {tarea.titulo}
      </h4>

      {tarea.descripcion && <p>{tarea.descripcion}</p>}

      <label>
        <input
          type="checkbox"
          checked={tarea.completada}
          onChange={() => toggleCompletada(tarea.id)}
        />
        Completada
      </label>

      <br />
      <br />

      <Link to={"/tarea/" + tarea.id} style={estilos.link}>
        Ver / Modificar
      </Link>
      <button type="button" onClick={() => eliminarTarea(tarea.id)}>
        Eliminar
      </button>
    </div>
  );
};
