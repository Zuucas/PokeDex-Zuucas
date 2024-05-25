import { Image, Text, Center, Flex, Card, CardBody, Heading, Stack, } from "@chakra-ui/react"
 


type Props = {
    name: string;
    sprites: string | null;
    id:number;
    types:string;
}

export const PokeCard = ({name, sprites,id,types}: Props) => {


    return (

        <Card 
        maxW='sm' 
        border='4px solid white'
        bg='transparent'
        >
        <CardBody>
          <Center 
          h='300px'
          w='340px'
          backgroundImage='/img/pokeFlorest.jpg'
          backgroundSize='cover'
          borderRadius='30px'
          border='2px solid white'
          >
            <Image
             h='280px'
             src={sprites!} alt={name}/>
          </Center>
          <Stack 
          mt='6' 
          spacing='3'>
            <Heading 
            textAlign='center'  
            size='md'
            fontSize='1.5rem'            
            >
                {name ? 'n°'+' '+id+' - '+name : 'Pokemon'}
            </Heading>

            <Flex
            justify='center'
            fontSize='1.2rem'
            >
                <Text >{`Types: ${types}`}</Text>
            </Flex>            
          </Stack>
        </CardBody>
        

      </Card>
    )
}
