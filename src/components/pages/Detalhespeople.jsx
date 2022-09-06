import styles from './Paginas.module.css'
import { useEffect, useState } from "react";


const Detalhespeople = ({personagens}) => {

    const[show,setShow]=useState(false);
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('id');

    useEffect(() => {
        if (myParam) {
            setShow(true);
        }
    }, [myParam]);

    return (<div className={styles.containervalores}>
        <button onClick={()=>setShow(!show)} >{personagens.name}</button>
        <div className={styles.detalhes}>
            {show?<p><b>Gênero: </b> {personagens.gender}</p>:null}
            {show?<p><b>Altura: </b> {personagens.height} cm</p>:null}
            {show?<p><b>Peso: </b> {personagens.mass} kg</p>:null}
            {show?<p><b>Ano de nascimento: </b> {personagens.birth_year}</p>:null}
            {show?<p><b>Cor do cabelo: </b> {personagens.hair_color}</p>:null}
            {show?<p><b>Cor dos olhos: </b> {personagens.eye_color}</p>:null}
            {show?<br></br>:null}
        </div>
    </div>
    );
}

export default Detalhespeople;