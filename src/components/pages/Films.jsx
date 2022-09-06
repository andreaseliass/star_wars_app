import { useEffect, useState } from "react";
import styles from './Paginas.module.css'
import Detalhesfilmes from "./Detalhesfilmes";



const filmsURL = "https://swapi.dev/api/films";

const Films = () => {

    const [filmes, setFilmes] = useState([]);
    
    const getFilmes = async (url) => {
        const res = await fetch(url);
        const data = await res.json();
        const results = data.results.sort((filmea, filmeb)=> filmea.episode_id > filmeb.episode_id ? 1 : -1);
        setFilmes(results);
  };
  
  useEffect(() => {
    getFilmes(filmsURL);
  }, []);



  return (
    <div className={styles.containervalores}>
      <h2 className={styles.valor}>Filmes:</h2>
      <div className={styles.container}>
        {filmes.length === 0 && <p>Carregando...</p>}
        {filmes && filmes.map((filme) => <Detalhesfilmes filme={filme} key={filme.episode_id}/>)}
      </div>
    </div>
  );
};
export default Films