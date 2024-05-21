import axios from 'axios';
import { Button, Flex, Input, InputGroup, InputRightElement, Text } from "@chakra-ui/react";
import { useCallback, useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [search, setSearch] = useState('');
  // const navigate = useNavigate();

  const getPokemon = useCallback(async () => {
    
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=1302');
      setPokemon(response.data.results);
  }, []);

  useEffect(() => {
    getPokemon();
  }, [getPokemon]);

  // const handleClick = () => {
  //   if (search) {
  //     navigate(`https://pokeapi.co/api/v2/pokemon/${search.toLowerCase()}`);
  //   }
  // };

  return (
    <Flex direction="column" bg='black' p={4}>   
      
      {pokemon.map((monster: any) => (
        <Text key={monster.name} color='white'>{monster.name}</Text>
      ))}
    </Flex>
  );
}

export default App;
