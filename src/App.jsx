//Pages
import Home from './Pages/Home';
import FaleConosco from './Pages/FaleConosco';

//importando o React-Router-Dom
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Portal from './Pages/Portal';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          {/* Home */}
          <Route exact path="/" children={<Home />} />
          {/* Fale Conosco */}
          <Route exact path="/faleconosco" children={<FaleConosco />} />
<<<<<<< HEAD
=======

          <Route exact path="/Portal" children={<Portal />} />
>>>>>>> Igor
        </Switch>
      </Router>
    </div>
  );
}

export default App;
