import { useFormularioTarea } from "../hooks/useFormularioTarea";
import { useTareasStore } from "../store/tareasStore";
import estilos from "./FormularioTarea.module.css";

// formulario para  poder crear tareas
export const FormularioTarea = () => {
  const agregarTarea = useTareasStore((state) => state.agregarTarea);



  const { titulo, setTitulo, descripcion, setDescripcion, resetear } =
    useFormularioTarea();

  const manejarSubmit = (evento) => {
    evento.preventDefault();

    if (!titulo.trim()) {
      return;
    }

    agregarTarea(titulo.trim(), descripcion.trim());
    resetear();
  };

  return (
   
    <form className={estilos.formulario} onSubmit={manejarSubmit}>
      <h3>Agregar tarea</h3>

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
        rows={3}
        onChange={(e) => setDescripcion(e.target.value)}
      />
      <br />
      <br />

      <button type="submit">Agregar</button>
    </form>
  );
};
