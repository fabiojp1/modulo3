import { useFetch } from "../hooks/useFetch";

// URL API publica
const URL_FRASES = "https://dummyjson.com/quotes?limit=5";

export const FrasesMotivacionales = () => {
  const { datos, cargando, error } = useFetch(URL_FRASES);


  if (cargando) {
    return <p>cargando frases...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!datos || !datos.quotes) {
    return <p>No se encontraron frases</p>;
  }

  const frases = datos.quotes;

  return (
    <div>
      <h3>Frases motivacionales</h3>
      <ul>
        {frases.map((frase) => (
          <li key={frase.id}>
            <strong>{frase.quote}</strong> — {frase.author}
          </li>
        ))}
      </ul>
    </div>
  );
};
