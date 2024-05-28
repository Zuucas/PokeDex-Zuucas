import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { pokemon } from '../../types/type';
import { Center, Flex, Image,Text } from "@chakra-ui/react";


const pokeURL = import.meta.env.VITE_API;


export const PokeDetail = () => {

    const {id} = useParams();
    const [pokemon, setPokemon] = useState< pokemon >();



    const getPokemon = async () => {
        await axios.get(`${pokeURL}${id}`)
        .then((response:AxiosResponse<pokemon>) => {
          setPokemon(response.data)
        })
      }

      useEffect(() => {
        getPokemon();
        console.log(pokemon!);
        
      }, [])


    return (
        <Flex
        direction='column'
        
        >

          <Flex
          border='1px solid black'
          // h='30vh'
          flex='1'
          direction='column'
          >
            <Text fontSize='2.5rem'>{pokemon?.name}</Text>
            <Image w='200px' src={pokemon?.sprites?.other?.showdown?.front_default ?? ''}/> 
          </Flex>

          <Flex
          flex='1'
          border='1px solid red'
          // h='30vh'
          >

          </Flex>
          
             
             
        </Flex>
    )
}