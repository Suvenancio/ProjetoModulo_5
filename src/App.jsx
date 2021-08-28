//Pages
import Home from './Pages/Home';
import FaleConosco from './Pages/FaleConosco';

//importando o React-Router-Dom
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          {/* Home */}
          <Route exact path="/" children={<Home />} />
          {/* Fale Conosco */}
          <Route exact path="/faleconosco" children={<FaleConosco />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
