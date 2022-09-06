import { useEffect, useState } from "react";
import Detalhesstarships from "./Detalhesstarships";
import styles from './Paginas.module.css'

const Starchips = () => {

  const [naves, setStarships] = useState([]);
      
  async function getStarships() {
    let allData = [];
    let temmaispaginas = true;
    let currentPage = 0;
    
    let response = {}

      const urlParams = new URLSearchParams(window.location.search);
      const myParam = urlParams.get('id');

      if (myParam){
        response = await fetch(`https://swapi.dev/api/starships/${myParam}`)
        let data = await response.json();
        allData.push(data); 
      }
      else {
        while(temmaispaginas) {
          currentPage++;
          response = await fetch(`https://swapi.dev/api/starships/?page=${currentPage}`)
          let data = await response.json();
          const total_pages = 4;
          allData.push(...data.results); 
          temmaispaginas = currentPage < total_pages; //quando for false sai do while
        }
      }
      allData = allData.sort((nave1, nave2)=> nave1.name > nave2.name ? 1 : -1);
      setStarships(allData);
  } 

  useEffect(() => {
    getStarships();
  }, []);
  
  
  
  
    return (
      <div className={styles.containervalores}>
        <h2 className={styles.valor}>Naves:</h2>
        <div className={styles.container}>
          {naves.length === 0 && <p>Carregando...</p>}
          {naves.length > 0 && naves.map((nave) => <Detalhesstarships nave={nave} key={nave.name} />)}
        </div>
      </div>
    );
  
  }
export default Starchips