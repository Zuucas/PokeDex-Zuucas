import { VStack, Image, Text, Center, Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, Stack, Box } from "@chakra-ui/react"
 


export type Props = {
    name: string;
    imageUrl: string;
}
export const PokeCard = ({name, imageUrl}: Props) => {


    return (
        <Card maxW='sm'>
        <CardBody>
          <Center 
          h='300px'
          w='340px'
          backgroundImage='/img/pokeFlorest.jpg'
          backgroundSize='cover'
          >
            <Image
             h='180px'
             src={imageUrl} alt={name}/>
          </Center>
          <Stack 
          mt='6' 
          spacing='3'>
            <Heading 
            textAlign='center'  
            size='md'            
            >
                {name}
            </Heading>
            <Text >
              Types
            </Text>            
          </Stack>
        </CardBody>
        

      </Card>
    )
}
