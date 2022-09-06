import styles from "./Paginas.module.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Detalhesfilmes = ({ filme }) => {
  const [show, setShow] = useState(false);

  const [personagens, setPeople] = useState([]);
  const [naves, setStarships] = useState([]);
  const [planetas, setPlanets] = useState([]);
  const [especies, setSpecies] = useState([]);
  const [veiculos, setVehicles] = useState([]);

  async function getPeople() {
    let allData = [];
    let temmaispaginas = true;
    let currentPage = 0;

    while (temmaispaginas) {
      currentPage++;
      const response = await fetch(
        `https://swapi.dev/api/people/?page=${currentPage}`
      );
      let data = await response.json();
      const total_pages = 9;
      allData.push(...data.results);
      temmaispaginas = currentPage < total_pages; //quando for false sai do while
    }
    setPeople(allData);
  }

  // teste
  async function getStarships() {
    let allData = [];
    let temmaispaginas = true;
    let currentPage = 0;

    while (temmaispaginas) {
      currentPage++;
      const response = await fetch(
        `https://swapi.dev/api/starships/?page=${currentPage}`
      );
      let data = await response.json();
      const total_pages = 4;
      allData.push(...data.results);
      temmaispaginas = currentPage < total_pages; //quando for false sai do while
    }
    setStarships(allData);
  }
  //teste


  async function getPlanets() {
    let allData = [];
    let temmaispaginas = true;
    let currentPage = 0;

    while (temmaispaginas) {
      currentPage++;
      const response = await fetch(
        `https://swapi.dev/api/planets/?page=${currentPage}`
      );
      let data = await response.json();
      const total_pages = 6;
      allData.push(...data.results);
      temmaispaginas = currentPage < total_pages; //quando for false sai do while
    }
    setPlanets(allData);
  }

  async function getSpecies() {
    let allData = [];
    let temmaispaginas = true;
    let currentPage = 0;

    while (temmaispaginas) {
      currentPage++;
      const response = await fetch(
        `https://swapi.dev/api/species/?page=${currentPage}`
      );
      let data = await response.json();
      const total_pages = 4;
      allData.push(...data.results);
      temmaispaginas = currentPage < total_pages; //quando for false sai do while
    }
    setSpecies(allData);
  }
  //teste

   // teste
   async function getVehicles() {
    let allData = [];
    let temmaispaginas = true;
    let currentPage = 0;

    while (temmaispaginas) {
      currentPage++;
      const response = await fetch(
        `https://swapi.dev/api/vehicles/?page=${currentPage}`
      );
      let data = await response.json();
      const total_pages = 4;
      allData.push(...data.results);
      temmaispaginas = currentPage < total_pages; //quando for false sai do while
    }
    setVehicles(allData);
  }
  //teste

  useEffect(() => {
    getPeople(); getStarships(); getPlanets(); getSpecies();getVehicles();
  }, []);

  return (
    <div className={styles.containervalores}>
      <button onClick={() => setShow(!show)}>{filme.title}</button>
      {show && (
        <div className={styles.detalhes}>
          <p>
            <b>Episódio: </b>
            {filme.episode_id}
          </p>
          <p>
            <b>Diretor: </b>
            {filme.director}
          </p>
          <p>
            <b>Produtor: </b>
            {filme.producer}
          </p>
          <p>
            <b>Data de lançamento: </b>
            {filme.release_date.split("-")[2] +
              "/" +
              filme.release_date.split("-")[1] +
              "/" +
              filme.release_date.split("-")[0]}
          </p>

          <div>
            <b>Personagens:</b>
            {personagens.length === 0 && <p>Carregando...</p>}
            {personagens.length > 0 &&
              filme.characters.map((peopleURL) => (
                <Link
                  to={`/people/?id=${peopleURL.split("/")[5]}`}
                  key={peopleURL}
                >
                  <p>
                    {personagens
                      .filter((p) => peopleURL === p?.url)
                      .map((p) => p.name)}
                  </p>
                </Link>
              ))}
              <br></br>
          </div>

          <div>
            <b>Planetas:</b>
            {planetas.length === 0 && <p>Carregando...</p>}
            {planetas.length > 0 &&
              filme.planets.map((planetsURL) => (
                <Link
                  to={`/planets/?id=${planetsURL.split("/")[5]}`}
                  key={planetsURL}
                >
                  <p>
                    {planetas
                      .filter((p) => planetsURL === p?.url)
                      .map((p) => p.name)}
                  </p>
                </Link>
              ))}
              <br></br>
          </div>

          <div>
            <b>Espécies:</b>
            {especies.length === 0 && <p>Carregando...</p>}
            {especies.length > 0 &&
              filme.species.map((speciesURL) => (
                <Link
                  to={`/species/?id=${speciesURL.split("/")[5]}`}
                  key={speciesURL}
                >
                  <p>
                    {especies
                      .filter((p) => speciesURL === p?.url)
                      .map((p) => p.name)}
                  </p>
                </Link>
              ))}
              <br></br>
          </div>

          <div>
            <b>Naves:</b>
            {naves.length === 0 && <p>Carregando...</p>}
            {naves.length > 0 &&
              filme.starships.map((navesURL) => (
                <Link
                  to={`/starships/?id=${navesURL.split("/")[5]}`}
                  key={navesURL}
                >
                  <p>
                    {naves
                      .filter((p) => navesURL === p?.url)
                      .map((p) => p.name)}
                  </p>
                </Link>
              ))}
              <br></br>
          </div>

          <div>
            <b>Veículos:</b>
            {veiculos.length === 0 && <p>Carregando...</p>}
            {veiculos.length > 0 &&
              filme.vehicles.map((veiculosURL) => (
                <Link
                  to={`/vehicles/?id=${veiculosURL.split("/")[5]}`}
                  key={veiculosURL}
                >
                  <p>
                    {veiculos
                      .filter((p) => veiculosURL === p?.url)
                      .map((p) => p.name)}
                  </p>
                </Link>
              ))}
              <br></br>
          </div>
          
        </div>
      )}
    </div>
  );
};

export default Detalhesfilmes;
