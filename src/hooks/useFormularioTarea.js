import { useState } from "react";

export const useFormularioTarea = () => {
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const resetear = () => {
    setTitulo("");
    setDescripcion("");
  };

  return { titulo, setTitulo, descripcion, setDescripcion, resetear };
};
