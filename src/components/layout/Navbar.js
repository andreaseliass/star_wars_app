import { Link } from 'react-router-dom'
import Container from './Container'
import styles from './Navbar.module.css'
import logo from '../../img/Star_Wars_Logo.png'

function Navbar(){
    return (
        <nav className={styles.navbar}>
            <Container>
                <Link to="/">
                    <img src={logo} alt='Star Wars' height='114px' width='189px'/>
                </Link>
                <ul className={styles.list}>
                    <li className={styles.item}><Link to="/">Home</Link></li>
                    <li className={styles.item}><Link to="/films">Filmes</Link></li>
                    <li className={styles.item}><Link to="/people">Personagens</Link></li>
                    <li className={styles.item}><Link to="/planets">Planetas</Link></li>
                    <li className={styles.item}><Link to="/species">Espécies</Link></li>
                    <li  className={styles.item}><Link to="/starships">Naves</Link></li>
                    <li  className={styles.item}><Link to="/vehicles">Veículos</Link></li>
                </ul>
        </Container>

        </nav>
        
       

    )
}

export default Navbar