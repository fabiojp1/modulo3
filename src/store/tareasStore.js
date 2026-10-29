import { create } from "zustand";

export const useTareasStore = create((set) => ({
  tareas: [
    {
      id: 1,
      titulo: "Estudiar React",
      descripcion: "Repasar hooks y Zustand",
      completada: false,
    },
  ],


  agregarTarea: (titulo, descripcion) =>
    set((state) => ({
      tareas: [
        ...state.tareas,
        {
          id: Date.now(), 
          titulo,
          descripcion,
          completada: false,
        },
      ],
    })),





  
  eliminarTarea: (id) =>
    set((state) => ({
      tareas: state.tareas.filter((tarea) => tarea.id !== id),
    })),






  editarTarea: (id, titulo, descripcion) =>
    set((state) => ({
      tareas: state.tareas.map((tarea) =>
        tarea.id === id ? { ...tarea, titulo, descripcion } : tarea,
      ),
    })),







    

  toggleCompletada: (id) =>
    set((state) => ({
      tareas: state.tareas.map((tarea) =>
        tarea.id === id ? { ...tarea, completada: !tarea.completada } : tarea,
      ),
    })),
}));
