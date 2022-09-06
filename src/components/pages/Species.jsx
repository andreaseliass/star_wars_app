import { useEffect, useState } from "react";
import styles from './Paginas.module.css'
import Detalhesspecies from "./Detalhesspecies";

const Species = () => {

    const [especies, setEspecies] = useState([]);
    
    async function getEspecies() {
      let allData = [];
      let temmaispaginas = true;
      let currentPage = 0;

      let response = {}

      const urlParams = new URLSearchParams(window.location.search);
      const myParam = urlParams.get('id');

      if (myParam){
        response = await fetch(`https://swapi.dev/api/species/${myParam}`)
        let data = await response.json();
        allData.push(data); 
      }
      else {
        while(temmaispaginas) {
          currentPage++;
          const response = await fetch(`https://swapi.dev/api/species/?page=${currentPage}`)
          let data = await response.json();
          const total_pages = 4;
          allData.push(...data.results); 
          temmaispaginas = currentPage < total_pages; //quando for false sai do while
        }
      }
    allData = allData.sort((especie1, especie2)=> especie1.name > especie2.name ? 1 : -1);
      setEspecies(allData);
    }
  
  useEffect(() => {
    getEspecies();
  }, []);

  return (
    <div className={styles.containervalores}>
      <h2 className={styles.valor}>Espécies:</h2>
      <div className={styles.container}>
        {especies.length === 0 && <p>Carregando...</p>}
        {especies.length > 0 && especies.map((especie) => <Detalhesspecies especie={especie} key={especie.name} />)}
      </div>
    </div>
  );
};
export default Species