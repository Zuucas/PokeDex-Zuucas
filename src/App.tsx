import { Routes, Route } from 'react-router-dom';
import  PokeHome from './components/pokeHome';
import { PokeDetail } from './components/pokeDetail';

function App() {

  return (
    <Routes>
      <Route path="/" element={<PokeHome />} />
      <Route path="/:id" element={<PokeDetail />} />
    </Routes>
  );
}

export default App;
