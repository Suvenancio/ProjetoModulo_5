import './App.css';
//Login Import
import Login from './Pages/Login/Login'

//importando o React-Router-Dom 
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          {/* Login */}
          <Route exact path="/Login" children={<Login/>}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
