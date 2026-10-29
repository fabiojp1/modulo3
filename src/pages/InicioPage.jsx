import { FormularioTarea } from "../components/FormularioTarea";
import { ListadoTareas } from "../components/ListadoTareas";

export const InicioPage = () => {
  return (
    <>
      {/* agregar tareas */}
      <FormularioTarea />
      {/* sotore tareas */}
      <ListadoTareas />
    </>
  );
};
