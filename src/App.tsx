import axios, { AxiosResponse } from 'axios';
import { Button, Flex, Input, VStack, Image, InputGroup, InputRightElement } from "@chakra-ui/react";
import {  useEffect, useState } from 'react';
import { PokeCard } from './components/pokeCard/PokeCard';
import { Search2Icon } from '@chakra-ui/icons';
import { pokemon } from './types/type';

function App() {

const [pokemonInput, setPokemonInput] = useState('');

const [pokemon, setPokemon] = useState< pokemon >();

const handleClick = () => {
  if (pokemonInput) {
    getPokemon();    
    setPokemonInput('')
    
  }
};


const getPokemon = async () => {
  await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonInput.toLowerCase()}`)
  .then((response:AxiosResponse<pokemon>) => {
    setPokemon(response.data)
  })
}

useEffect(() => {
  console.log(pokemon?.name);
}, [pokemon]);

  return (
    <VStack 
    justify='center'
    align='center'
    h='100vh'
    backgroundImage='/img/pokeScenary.png'
    backgroundSize='cover'
    >  
    <Image 
    src='/img/pokeLogo.png' 
    alt='logoPoke'
    w='340px'
    /> 

      <Flex
      >
        <InputGroup>
            <Input 
            border='2px solid black'
            placeholder='Nome ou n° do Pokemon'
            variant='fluid' 
            value={pokemonInput}
            onChange={e => setPokemonInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleClick()}
            />

            <InputRightElement>
                <Button
                bg='black'
                border='3px solid black'
                onClick={handleClick}
                >
                  <Search2Icon/>
                </Button> 
            </InputRightElement>

          </InputGroup>
      </Flex>

      
      {pokemon && (
        <PokeCard 
          sprites={pokemon.sprites.front_default}
          name={pokemon.name}
          id={pokemon.id}
          types={pokemon.types.map((i: { type: { name: string; }; }) => i.type.name).join(', ')}
        />

      )}
    </VStack>
  );
}

export default App;
