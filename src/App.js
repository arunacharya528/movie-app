import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Nav } from './components/Nav';
import { DrawerContext, DrawerProvider } from './context/DrawerContext';
import { Home } from './pages/Home';
import { Movie } from './pages/Movie';

function App() {
  return (
    <BrowserRouter>
      <DrawerProvider>
        <Nav />
        <div className="container mx-auto">
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/movie/:id" exact element={<Movie />} />

          </Routes>
        </div>
      </DrawerProvider>
    </BrowserRouter>
  );
}

export default App;
