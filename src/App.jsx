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
