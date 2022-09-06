import { useEffect, useState } from "react";
import Detalhespeople from "./Detalhespeople";
import styles from './Paginas.module.css'

const People = () => {

    const [personagens, setPeople] = useState([]);
        
    async function getPeople() {
      let allData = [];
      let temmaispaginas = true;
      let currentPage = 0;
    
      let response = {}

      const urlParams = new URLSearchParams(window.location.search);
      const myParam = urlParams.get('id');

      if (myParam){
        response = await fetch(`https://swapi.dev/api/people/${myParam}`)
        let data = await response.json();
        allData.push(data); 
      }
      else {      
        while(temmaispaginas) {
          currentPage++;
          response = await fetch(`https://swapi.dev/api/people/?page=${currentPage}`)
          let data = await response.json();
          const total_pages = 9;
          allData.push(...data.results); 
          temmaispaginas = currentPage < total_pages; //quando for false sai do while
       }
      }

    allData = allData.sort((person1, person2)=> person1.name > person2.name ? 1 : -1);
    setPeople(allData);
    }
  
  useEffect(() => {
    getPeople();
  }, []);
  

  return (
    <div className={styles.containervalores}>
      <h2 className={styles.valor}>Personagens:</h2>
      <div className={styles.container}>
        {personagens.length === 0 && <p>Carregando...</p>}
        {personagens.length > 0 && personagens.map((personagens) => <Detalhespeople personagens={personagens} key={personagens.name} />)}
      </div>
    </div>
  );
};
export default People