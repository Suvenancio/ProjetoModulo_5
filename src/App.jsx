//Pages
import Home from './Pages/Home';
import FaleConosco from './Pages/FaleConosco';
import ModalPage from './Pages/ModalPage'
//importando o React-Router-Dom
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//Context
import {AuthProvider} from './Components/ValidaLogin/Context'
import RoutePrivat from './Components/ValidaLogin/RoutePrivat'

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          {/* Home */}
          <Route exact path="/" children={<Home/>} />
          {/* Fale Conosco */}
          <Route exact path="/faleconosco" children={<FaleConosco />} />
          <RoutePrivat exact path="/ModalPage" component={ModalPage}/>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
