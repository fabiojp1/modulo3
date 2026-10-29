import { useTareasStore } from "../store/tareasStore";
import { TarjetaTarea } from "./TarjetaTarea";

export const ListadoTareas = () => {
  const tareas = useTareasStore((state) => state.tareas);

  if (tareas.length === 0) {
    return <p>No hay tareas agregadas</p>;
  }

  return (
    <div>
      <h3>Listado tareas ({tareas.length})</h3>
      {tareas.map((tarea) => (
        <TarjetaTarea key={tarea.id} tarea={tarea} />
      ))}
    </div>
  );
};
