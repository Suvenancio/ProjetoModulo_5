//Pages
import Home from './Pages/Home';
import Login from './Pages/Login/Login';
import CadastroPaciente from './Pages/CadastroPaciente';
import FaleConosco from './Pages/FaleConosco';

//importando o React-Router-Dom
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Portal from './Pages/Portal';

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

          <Route exact path="/Portal" children={<Portal />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
