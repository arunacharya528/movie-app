import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Nav } from './components/Nav';
import { DrawerContext, DrawerProvider } from './context/DrawerContext';
import { Home } from './pages/Home';
import { Movie } from './pages/Movie';
import { Search } from './pages/Search';

function App() {
  return (
    <BrowserRouter>
      <DrawerProvider>
        <Nav />
        <div className="container mx-auto">
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/movie/:id" exact element={<Movie />} />
            <Route path="/search" exact element={<Search />} />
          </Routes>
        </div>
      </DrawerProvider>
    </BrowserRouter>
  );
}

export default App;
