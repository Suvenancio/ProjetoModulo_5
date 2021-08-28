//Pages
import Home from './Pages/Home';
import Login from './Pages/Login/Login';
import CadastroPaciente from './Pages/CadastroPaciente';
import FaleConosco from './Pages/FaleConosco';

//importando o React-Router-Dom
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          {/* Login */}
          <Route exact path="/Login" children={<Login />} />
          {/* Home */}
          <Route exact path="/" children={<Home />} />
          {/* Fale Conosco */}
          <Route exact path="/faleconosco" children={<FaleConosco />} />
          {/* Cadastro */}
          <Route exact path="/Cadastro" children={<CadastroPaciente />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
