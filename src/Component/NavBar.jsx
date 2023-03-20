import { UnlockIcon } from "@chakra-ui/icons";
import { Avatar, AvatarBadge, Box, Button, Flex, Heading, HStack, Spacer, Text, useToast } from "@chakra-ui/react";

export default function NavBar() {
  const toast = useToast()

  const showtoast =() =>{
           toast({
            title:'Loged Out',
            description: 'Succcesfully Logout',
            duration:5000,
            isClosable: true,
            status: 'success',
            position: 'top',
          
           })
  }
  return (
     <Flex as="nav" p="10px" alignItems="Center" mb="60px">
          <Heading as="h1" ml= "20px"> Dojo Task </Heading>
          <Spacer/>
          
          <HStack spacing="20px" mr="20px">
          <Avatar name="Mario" src="/img/mario.png">
                <AvatarBadge width={'1.3em'}  bg={"teal.500"}>
                         <Text fontSize="x-small" color={"white"}>3</Text>
                </AvatarBadge>
            </Avatar>
          <Text p ="10px" >Dojo@neinja.co </Text>
          <Button colorScheme="purple" onClick={showtoast}>Logout</Button>
          </HStack>
     </Flex>
  )
}
