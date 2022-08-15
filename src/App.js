import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Nav } from './components/Nav';
import { Home } from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>

    </BrowserRouter>
  );
}

export default App;
