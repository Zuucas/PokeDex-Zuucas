import { Image, Text, Center, Flex, Card, CardBody, Heading, Stack,Box } from "@chakra-ui/react"
 


export type Props = {
    name: string;
    imageUrl: string;
    id:string;
    types:string
}
export const PokeCard = ({name, imageUrl,id,types}: Props) => {


    return (

        <Card maxW='sm' border='4px solid white'>
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
             src={imageUrl} alt={name}/>
          </Center>
          <Stack 
          mt='6' 
          spacing='3'>
            <Heading 
            textAlign='center'  
            size='md'            
            >
                {name ? 'n°'+' '+id+' - '+name : 'Pokemon'}
            </Heading>

            <Flex>
                <Text>Types:</Text>
            </Flex>            
          </Stack>
        </CardBody>
        

      </Card>
    )
}
