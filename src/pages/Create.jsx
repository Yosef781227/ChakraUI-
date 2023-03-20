import { Box, Button, Center, Checkbox, FormControl, FormHelperText, FormLabel, Input, Textarea } from "@chakra-ui/react";
import { Form, redirect } from "react-router-dom";

export default function Create() {
  return (
     <Box maxW="480px" >
           <Form method="post" action="/create">
                  <FormControl isRequired mb="40px">
                          <FormLabel >Task Name:</FormLabel>
                          <Input type="Text" name='title' />
                          <FormHelperText>Enter the Discriptive Task Name</FormHelperText>
                  </FormControl>
                  <FormControl mb="40px">
                          <FormLabel>Task Discription :</FormLabel>
                          <Textarea 
                          placeholder="Enter the detailed Discription for the task"
                          name="description"
                          />
                  </FormControl>
                  <FormControl mb="40px"  display="flex" alignItems="center" >
                          <Checkbox 
                              name="isPriority"
                              size="lg"
                              colorScheme="purple"
                          />
                          <FormLabel ml="10px" mt="10px">Make is Priority Task</FormLabel>
                  </FormControl>
                  <Button variant={"ghost"} type="submit" bg={"purple.400"}>Submit</Button>
           </Form>
     </Box>
  )
}

export const createAction = async({request}) => {
  const data = await request.formData()
  const task = {
    title: data.get('title'),
    description: data.get('description'),
    isPriority: data.get('isPriority') === ''
  }
  console.log(task)
  return redirect(' / ' )
}
