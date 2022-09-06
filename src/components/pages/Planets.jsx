import { useEffect, useState } from "react";
import styles from './Paginas.module.css'
import Detalhesplanets from "./Detalhesplanets";


const Planets = () => {

  const [planetas, setPlanets] = useState([]);
      
  async function getPlanets() {
    let allData = [];
    let temmaispaginas = true;
    let currentPage = 0;
    let response = {}

      const urlParams = new URLSearchParams(window.location.search);
      const myParam = urlParams.get('id');

      if (myParam){
        response = await fetch(`https://swapi.dev/api/planets/${myParam}`)
        let data = await response.json();
        allData.push(data); 
      }
      else {
        while(temmaispaginas) {
          currentPage++;
          const response = await fetch(`https://swapi.dev/api/planets/?page=${currentPage}`)
          let data = await response.json();
          const total_pages = 6;
          allData.push(...data.results); //allData é um array de arrays
          temmaispaginas = currentPage < total_pages; //quando for false sai do while
        }
      }
      allData = allData.sort((planet1, planet2)=> planet1.name > planet2.name ? 1 : -1);
      setPlanets(allData);
  
  } 

useEffect(() => {
  getPlanets();
}, []);


  return (
    <div className={styles.containervalores}>
      <h2 className={styles.valor}>Planetas:</h2>
      <div className={styles.container}>
        {planetas.length === 0 && <p>Carregando...</p>}
        {planetas.length > 0 && planetas.map((planetas) => <Detalhesplanets planetas={planetas} key={planetas.name} />)}
      </div>
    </div>
  );
};
export default Planets