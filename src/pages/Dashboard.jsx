import { EditIcon, ViewIcon } from "@chakra-ui/icons";
import { Avatar, Box , Button, Card, CardBody, CardFooter, CardHeader, Divider, Flex, Heading, HStack, SimpleGrid, TagLeftIcon, Text,} from "@chakra-ui/react";
import { useLoaderData } from "react-router-dom";

export default function Dashboard() {
  const tasks = useLoaderData();
  
  return (
    <SimpleGrid minChildWidth="300px"  spacing={10}>
              {tasks && tasks.map(tasks => (
               <Card key={tasks.id} borderTop = "8px" borderColor={"purple.400"} bg="white">
                     <CardHeader>
                          <Flex gap={20}>
                                <Avatar src={tasks.img}/>
                                <Box > 
                                  <Heading as="h3" size="sm">{tasks.title}</Heading>
                                  <Text>by {tasks.author}</Text>
                                </Box>
                          </Flex>

                      </CardHeader>

                      <CardBody color={"gray.500"}>
                            <Text>{tasks.description}</Text>
                      </CardBody>
                      <Divider borderColor={"gray.200"}></Divider>

                      <CardFooter>
                        <HStack>
                          <Button variant={"ghost"} leftIcon={<ViewIcon/>}>watch</Button>
                          <Button variant={"ghost"} leftIcon={<EditIcon/>}>Comment</Button>
                        </HStack>
                              
                      </CardFooter>

               </Card>
              ))}
      
           {/* <Box bg="white" h="200px" border="1px solid">
            <Text color={{base:"pink", md:"blue" ,  lg:"red" }}>Hello</Text>
           </Box>
           <Box bg="white" h="200px" border="1px solid"></Box>
           <Box bg="white" h="200px" border="1px solid"></Box>
           <Box bg="white" h="200px" border="1px solid"></Box>

           <Box bg="white" h="200px" border="1px solid"></Box>
           <Box bg="white" h="200px" border="1px solid"></Box>
           <Box bg="white" h="200px" border="1px solid"></Box>
           <Box bg="white" h="200px" border="1px solid"></Box>
           
           <Box bg="white" h="200px" border="1px solid"></Box>
           <Box bg="white" h="200px" border="1px solid"></Box>
           <Box bg="white" h="200px" border="1px solid"></Box> 
           <Box bg="white" h="200px" border="1px solid"></Box> */}
    </SimpleGrid>
  )
}
export const tasksLoder = async ()=> {

  const res = await fetch('http://localhost:3000/tasks');
  return res.json()
}
