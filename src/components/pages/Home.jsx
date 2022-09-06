import { Link } from 'react-router-dom'
import filmes from '../../img/movies.png'
import people from '../../img/people.webp'
import planets from '../../img/planets.webp'
import species from '../../img/species.png'
import starships from '../../img/starships.webp'
import vehicles from '../../img/vehicles.jpg'
import styles from './Paginas.module.css'

function Home(){
    return (
    <> 
            <div className={styles.card}>
                <Link to="/films" style={{ textDecoration: 'none' }}>
                    <img src={filmes} alt="Filmes" width='360px' height='350px'></img>
                    <div className={styles.containerhome}>
                        <h2><b>Filmes</b></h2>
                    </div>
                </Link>
            </div>
        
        
        
        <div className={styles.card} >
            <Link to="/people" style={{ textDecoration: 'none' }}>
                <img src={people} alt="Filmes" width='360px' height='350px' text-align='center'></img>
                <div className={styles.containerhome}>
                    <h2><b>Personagens</b></h2>
                </div>
            </Link>

        </div>

        <div className={styles.card}>
            <Link to="/planets" style={{ textDecoration: 'none' }}>
                <img src={planets} alt="Filmes" width='360px' height='350px'></img>
                <div className={styles.containerhome}>
                    <h2><b>Planetas</b></h2>
                </div>
            </Link>

        </div>
        <div className={styles.card}>
            <Link to="/species" style={{ textDecoration: 'none' }}>
                <img src={species} alt="Filmes" width='360px' height='350px'></img>
                <div className={styles.containerhome}>
                    <h2><b>Espécies</b></h2>
                </div>
            </Link>
        </div>

        <div className={styles.card}>
            <Link to="/starships" style={{ textDecoration: 'none' }}>
                <img src={starships} alt="Filmes" width='360px' height='350px'></img>
                <div className={styles.containerhome}>
                    <h2><b>Naves</b></h2>
                </div>
            </Link>
        </div>

         <div className={styles.card}>
         <Link to="/vehicles" style={{ textDecoration: 'none' }}>
            <img src={vehicles} alt="Filmes" width='360px' height='350px'></img>
            <div className={styles.containerhome}>
                <h2><b>Veículos</b></h2>
            </div>
        </Link>

        </div>
    </>  
    
    
    )
}

export default Home