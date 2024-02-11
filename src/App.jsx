import './App.css';

import Home from './components/Home';
import Navbar from './components/Navbar';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div >
      <div>

        <BrowserRouter>
          <Navbar />
          <Home />
        </BrowserRouter>

      </div>

    </div>
  );
}

export default App;
