import styles from './Paginas.module.css'
import { useEffect, useState } from "react";


const Detalhesvehicles = ({veiculo}) => {

    const[show,setShow]=useState(false);
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('id');

    useEffect(() => {
        if (myParam) {
            setShow(true);
        }
    }, [myParam]);

    return (<div className={styles.containervalores}>
        
        <button onClick={()=>setShow(!show)} >{veiculo.name}</button>
        <div className={styles.detalhes}>
            {show?<p><b>Modelo: </b> {veiculo.model}</p>:null}
            {show?<p><b>Fabricante: </b> {veiculo.manufacturer}</p>:null}
            {show?<p><b>Custo em créditos: </b> {veiculo.cost_in_credits}</p>:null}
            {show?<p><b>Comprimento: </b> {veiculo.length}</p>:null}
            {show?<p><b>Velocidade máxima na atmosfera: </b> {veiculo.max_atmosphering_speed}</p>:null}
            {show?<p><b>Equipe - quantidade: </b> {veiculo.crew}</p>:null}
            {show?<p><b>Passageiros: </b> {veiculo.passengers} </p>:null}
            {show?<p><b>Capacidade de carga: </b> {veiculo.cargo_capacity}</p>:null}
            {show?<p><b>Consumíveis: </b> {veiculo.consumables}</p>:null}
            {show?<p><b>Classe de veiculo: </b> {veiculo.vehicle_class}</p>:null}
            {show?<br></br>:null}
        </div>
    </div>
    );
}

export default Detalhesvehicles;