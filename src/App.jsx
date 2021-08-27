/* import BannerHome from './Components/BannerHome/BannerHome';
import MedicoHome from './Components/MedicoHome/MedicoHome';
import PortalHome from './Components/PortalHome/PortalHome';
import EspHome from './Components/EspHome/EspHome';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import FaleConosco from './Pages/FaleConosco/FaleConosco'; */


//Pages
import Modal from './Pages/ModalPage'

//importando o React-Router-Dom 
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          {/* teste */}
          <Route exact path="/ModalPage" children={<Modal/>}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
