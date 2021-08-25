import './App.css';
import BannerHome from './Components/BannerHome/BannerHome';
import MedicoHome from './Components/MedicoHome/MedicoHome';
import PortalHome from './Components/PortalHome/PortalHome';
import EspHome from './Components/EspHome/EspHome';

import FaleConosco from './Pages/FaleConosco/FaleConosco';

function App() {
  return (
    <div className="App">
      <MedicoHome />
      <PortalHome />
      <EspHome />
      <BannerHome />
      <FaleConosco />
    </div>
  );
}

export default App;
