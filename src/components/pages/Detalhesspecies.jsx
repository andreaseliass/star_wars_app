import styles from './Paginas.module.css'
import { useEffect, useState } from "react";


const Detalhesspecies = ({especie}) => {

    const[show,setShow]=useState(false);
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('id');

    useEffect(() => {
        if (myParam) {
            setShow(true);
        }
    }, [myParam]);

    return (<div className={styles.containervalores}>
        
        <button onClick={()=>setShow(!show)} >{especie.name}</button>
        <div className={styles.detalhes}>
            {show?<p><b>Classificação: </b> {especie.classification}</p>:null}
            {show?<p><b>Designação: </b> {especie.designation}</p>:null}
            {show?<p><b>Altura Média: </b> {especie.average_height} cm</p>:null}
            {show?<p><b>Cores de pele: </b> {especie.skin_colors}</p>:null}
            {show?<p><b>Cores de cabelo/pêlo: </b> {especie.hair_colors}</p>:null}
            {show?<p><b>Cores de olho: </b> {especie.eye_colors}</p>:null}
            {show?<p><b>Tempo de vida médio: </b> {especie.average_lifespan} anos</p>:null}
            {show?<p><b>Linguaguem: </b> {especie.language}</p>:null}
            {show?<br></br>:null}
        </div>
    </div>
    );
}

export default Detalhesspecies;