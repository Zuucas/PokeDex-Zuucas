import axios from 'axios';
import { Button, Center, Flex, Input, InputGroup, InputRightElement, Text, VStack } from "@chakra-ui/react";
import { useCallback, useEffect, useState } from 'react';
import { PokeCard } from './components/pokeCard/App';

function App() {

const [pokemonInput, setPokemonInput] = useState('');
const [pokemon, setPokemon] = useState('');
const [pokemonUrl, setPokemonUrl] = useState('');



const handleClick = () => {
  if (pokemonInput) {
    getPokemon();    
    
    console.log(pokemon);
    console.log(pokemonUrl);
  }
};


const getPokemon = () => {
  axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonInput.toLowerCase()}`)
  .then((response) => {
    setPokemon(response.data.name)
    setPokemonUrl(response.data.sprites.other.dream_world.front_default)
  })
}

  // const [pokemon, setPokemon] = useState([]);
  // const [search, setSearch] = useState('');
  // const navigate = useNavigate();

  // const getPokemon = useCallback(async () => {    
  //      await axios
  //      .get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=1302')
  //      .then((response) => { 
  //       setPokemon(response.data.results) 
  //       })
  //      .catch((error) => {
  //        console.log(error);
  //      })
      
  // }, []);

  // useEffect(() => {
  //   console.log(pokemon );
    
  //   getPokemon();
  // }, [getPokemon]);


  return (
    <VStack 
    justify='center'
    align='center'
    h='100vh'
    backgroundImage='/img/pokeScenary.png'
    backgroundSize='cover'
    >   

      <Flex>
          <Input 
          placeholder='Search' 
          variant='fluid' 
          w='290px'
          value={pokemonInput}
          onChange={e => setPokemonInput(e.target.value)}
          />
          <Button
          onClick={handleClick}
          >
            Search
          </Button>
      </Flex>

      <PokeCard 
      imageUrl={pokemonUrl}
      name={pokemon}
      />
      
    
      
      
    </VStack>
  );
}

export default App;
