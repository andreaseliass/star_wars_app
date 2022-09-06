import styles from './Paginas.module.css'
import { useEffect, useState } from "react";


const Detalhesstarships = ({nave}) => {

    const[show,setShow]=useState(false);
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('id');

    useEffect(() => {
        if (myParam) {
            setShow(true);
        }
    }, [myParam]);

    return (<div className={styles.containervalores}>
        
        <button onClick={()=>setShow(!show)} >{nave.name}</button>
        <div className={styles.detalhes}>
            {show?<p><b>Modelo: </b> {nave.model}</p>:null}
            {show?<p><b>Fabricante: </b> {nave.manufacturer}</p>:null}
            {show?<p><b>Custo em créditos: </b> {nave.cost_in_credits} </p>:null}
            {show?<p><b>Comprimento: </b> {nave.length} </p>:null}
            {show?<p><b>Velocidade máxima na atmosfera: </b> {nave.max_atmosphering_speed}</p>:null}
            {show?<p><b>Equipe - quantidade: </b> {nave.crew}</p>:null}
            {show?<p><b>Passageiros: </b> {nave.passengers} </p>:null}
            {show?<p><b>Capacidade de carga: </b> {nave.cargo_capacity}</p>:null}
            {show?<p><b>Consumíveis: </b> {nave.consumables}</p>:null}
            {show?<p><b>Classificação de hiperdrive: </b> {nave.hyperdrive_rating}</p>:null}
            {show?<p><b>Megalight por hora - mglt: </b> {nave.MGLT}</p>:null}
            {show?<p><b>Classe de nave: </b> {nave.starship_class}</p>:null}
            {show?<br></br>:null}
        </div>
    </div>
    );
}

export default Detalhesstarships;