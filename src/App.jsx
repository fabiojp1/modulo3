import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navegacion } from "./components/Navegacion";
import { InicioPage } from "./pages/InicioPage";
import { DetalleTareaPage } from "./pages/DetalleTareaPage";
import { FrasesMotivacionales } from "./components/FrasesMotivacionales";
import { ContactoPage } from "./pages/ContactoPage";
import { estilos } from "./shared/estilos";


function App() {
  return (
    
    <BrowserRouter>
      <div style={estilos.contenedor}>
        <header style={estilos.header}>
          <h2>Lista de Tareas</h2>
        </header>

      
        <Navegacion />

        <main style={estilos.main}>
        
          <Routes>
            {/* Pagina inicio*/}
            <Route path="/" element={<InicioPage />} />
         
            <Route path="/tarea/:id" element={<DetalleTareaPage />} />
            {/* API*/}
            <Route path="/frases" element={<FrasesMotivacionales />} />
            {/* pagina contacto */}
            <Route path="/contacto" element={<ContactoPage />} />
          </Routes>
        </main>

        <footer style={estilos.footer}>
          <small>Modulo 3</small>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
