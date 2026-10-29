import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [datos, setDatos] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const obtenerDatos = async () => {
      setCargando(true);
      setError(null);

      try {
        const respuesta = await fetch(url);

        if (!respuesta.ok) {
          throw new Error("No se pudo obtener los datos");
        }

        const resultado = await respuesta.json();
        setDatos(resultado);
      } catch (err) {
        console.error(err);
        setError("Error al cargar datos de la API");
      } finally {
        setCargando(false);
      }
    };

    obtenerDatos();
  }, [url]); 

  return { datos, cargando, error };
};
