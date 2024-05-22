import axios from 'axios';
import { Button, Flex, Input, VStack, Image, InputGroup, InputRightElement } from "@chakra-ui/react";
import {  useEffect, useState } from 'react';
import { PokeCard } from './components/pokeCard/App';
import { Search2Icon } from '@chakra-ui/icons';

function App() {

const [pokemonInput, setPokemonInput] = useState('');
const [pokemon, setPokemon] = useState('');
const [pokemonUrl, setPokemonUrl] = useState('');
const [pokemonId, setPokemonID] = useState('');
const [pokemonTypes, setPokemonTypes] = useState('');



const handleClick = () => {
  if (pokemonInput) {
    getPokemon();    
    setPokemonInput('')
  }
};


const getPokemon = () => {
  axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonInput.toLowerCase()}`)
  .then((response) => {
    setPokemon(response.data.name)
    setPokemonUrl(response.data.sprites.front_default)
    setPokemonID(response.data.id)
  })
}

useEffect(() => {
  
}, [pokemonInput]);



  return (
    <VStack 
    justify='center'
    align='center'
    h='100vh'
    backgroundImage='/img/pokeScenary.png'
    backgroundSize='cover'
    position='relative'
    >  
    <Image 
    src='/img/pokeLogo.png' 
    alt='logoPoke'
    // h='300px'
    w='340px'
    /> 

      <Flex
      >
        <InputGroup>
            <Input 
            border='2px solid black'
            // color='black'
            // bg='white'
            placeholder='Search'
            // _placeholder={{ color: 'black' }} 
            variant='fluid' 
            value={pokemonInput}
            onChange={e => setPokemonInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleClick()}
            />

            <InputRightElement>
                <Button
                bg='black'
                // _hover={{color:'white'}}
                // w='80px'
                border='3px solid black'
                onClick={handleClick}
                >
                  <Search2Icon/>
                </Button> 
            </InputRightElement>

          </InputGroup>
      </Flex>

      <PokeCard 
      imageUrl={pokemonUrl}
      name={pokemon}
      id={pokemonId}
      types={''}
      />
      
    
      
      
    </VStack>
  );
}

export default App;
