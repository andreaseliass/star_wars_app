import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/pages/Home.jsx'
import Films from './components/pages/Films'
import Planets from './components/pages/Planets.jsx'
import Species from './components/pages/Species.jsx'
import People from './components/pages/People.jsx'
import Starships from './components/pages/Starships.jsx'
import Vehicles from './components/pages/Vehicles.jsx'

import Container from './components/layout/Container.js'
import Navbar from './components/layout/Navbar.js'
import Footer from './components/layout/Footer.js'


function App() {
  return (
    <Router>
      <Navbar />
      
      <Container customClass="min-height">
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/films" element={<Films/>}/>
        <Route exact path="/people" element={<People/>}/>
        <Route exact path="/planets" element={<Planets/>}/>
        <Route exact path="/species" element={<Species/>}/>
        <Route exact path="/starships" element={<Starships/>}/>
        <Route exact path="/vehicles" element={<Vehicles/>}/>
      </Routes>

      </Container>
      
      
      <Footer />
    </Router>
  );
}

export default App;
