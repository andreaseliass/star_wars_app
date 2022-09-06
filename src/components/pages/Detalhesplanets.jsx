import styles from './Paginas.module.css'
import { useEffect, useState } from "react";


const Detalhesplanets = ({planetas}) => {

    const[show,setShow]=useState(false);
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('id');

    useEffect(() => {
        if (myParam) {
            setShow(true);
        }
    }, [myParam]);

    return (<div className={styles.containervalores}>
        <button onClick={()=>setShow(!show)} >{planetas.name}</button>
        <div className={styles.detalhes}>
            {show?<p><b>Clima: </b> {planetas.climate}</p>:null}
            {show?<p><b>População: </b> {planetas.population}</p>:null}
            {show?<p><b>Diâmetro: </b> {planetas.diameter}</p>:null}
            {show?<p><b>Terreno: </b> {planetas.terrain}</p>:null}
            {show?<p><b>Período de rotação: </b> {planetas.rotation_period} horas</p>:null}
            {show?<p><b>Período Orbital: </b> {planetas.orbital_period} dias</p>:null}
            {show?<br></br>:null}
        </div>
    </div>
    );
}

export default Detalhesplanets;