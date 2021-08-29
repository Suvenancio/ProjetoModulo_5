/* import BannerHome from './Components/BannerHome/BannerHome';
import MedicoHome from './Components/MedicoHome/MedicoHome';
import PortalHome from './Components/PortalHome/PortalHome';
import EspHome from './Components/EspHome/EspHome';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import FaleConosco from './Pages/FaleConosco/FaleConosco'; */


//Pages
import Login from './Pages/Login/Login'
import CadastroPaciente from './Pages/CadastroPaciente/CadastroPaciente';

//importando o React-Router-Dom 
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Dentista from './Components/Dentistas';
import Header from './/Components/Header/Header'
import Usuario from './Components/Usuário/Index';


function App() {
  return (   
    <div className="App">
  
      <Header />
     <Usuario />
      <Router>
        <Switch>
          {/* Login */}
          <Route exact path="/Login" children={<Login/>}/>
          {/* Cadastro */}
          <Route exact path="/Cadastro" children={<CadastroPaciente/>}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
