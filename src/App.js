import './App.css';
import BannerHome from './Components/BannerHome/BannerHome';
import MedicoHome from './Components/MedicoHome/MedicoHome';
import PortalHome from './Components/PortalHome/PortalHome';

import FaleConosco from './Pages/FaleConosco/FaleConosco';

function App() {
  return (
    <div className="App">
      <MedicoHome />
      <PortalHome />
      <BannerHome />7
      <FaleConosco />
    </div>
  );
}

export default App;
