import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Nav } from './components';
import { DrawerProvider } from './context';
import { Home, Movie, Search } from './pages';

function App() {
  return (
    <BrowserRouter>
      <DrawerProvider>
        <Nav />
        <div className="w-10/12 mx-auto">
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
