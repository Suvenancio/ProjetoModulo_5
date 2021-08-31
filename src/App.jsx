//Pages
import Home from './Pages/Home';
import FaleConosco from './Pages/FaleConosco';
import Dentistas from './Pages/Dentistas';
import Fundadores from './Pages/Fundadores';

//importando o React-Router-Dom
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Portal from './Pages/Portal';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" children={<Home />} />
          <Route exact path="/faleconosco" children={<FaleConosco />} />
          <Route exact path="/dentistas" children={<Dentistas />} />
          <Route exact path="/portal" children={<Portal />} />
          <Route exact path="/fundadores" children={<Fundadores />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
