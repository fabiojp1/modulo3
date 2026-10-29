import { Link } from "react-router-dom";
import { useTareasStore } from "../store/tareasStore";
import { estilos } from "../shared/estilos";


export const Navegacion = () => {
  const tareas = useTareasStore((state) => state.tareas);

 let pendientes = 0;
  for (let i = 0; i < tareas.length; i++) {
    if (!tareas[i].completada) {
      pendientes = pendientes + 1;
    }
  }

  return (
    <nav style={estilos.nav}>
         <Link to="/" style={estilos.link}>
        Mis tareas
      </Link>
      <Link to="/frases" style={estilos.link}>
        Frases (API)
      </Link>
      <Link to="/contacto" style={estilos.link}>
        Contacto
      </Link>
      <span>Tareas Pendientes: {pendientes}</span>
    </nav>
  );
};
