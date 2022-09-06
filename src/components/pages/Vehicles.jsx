import { useEffect, useState } from "react";
import styles from './Paginas.module.css'
import Detalhesvehicles from "./Detalhesvehicles";

const Vehicles = () => {

  const [veiculos, setVehicles] = useState([]);
      
  async function getPeople() {
    let allData = [];
    let temmaispaginas = true;
    let currentPage = 0;
    let response = {}

      const urlParams = new URLSearchParams(window.location.search);
      const myParam = urlParams.get('id');

      if (myParam){
        response = await fetch(`https://swapi.dev/api/vehicles/${myParam}`)
        let data = await response.json();
        allData.push(data); 
      }
      else {
        while(temmaispaginas) {
          currentPage++;
          const response = await fetch(`https://swapi.dev/api/vehicles/?page=${currentPage}`)
          let data = await response.json();
          const total_pages = 4;
          allData.push(...data.results); //allData é um array de arrays
          temmaispaginas = currentPage < total_pages; //quando for false sai do while
        }
      }
      allData = allData.sort((veiculo1, veiculo2)=> veiculo1.name > veiculo2.name ? 1 : -1);
      setVehicles(allData);

  } 


useEffect(() => {
  getPeople();
}, []);

  return (
    <div className={styles.containervalores}>
      <h2 className={styles.valor}>Veículos:</h2>
      <div className={styles.container}>
        {veiculos.length === 0 && <p>Carregando...</p>}
        {veiculos.length > 0 && veiculos.map((veiculo) =><Detalhesvehicles veiculo={veiculo} key={veiculo.name} />)}
      </div> 
    </div>
  );
};
export default Vehicles