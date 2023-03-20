import { Grid, GridItem } from "@chakra-ui/react"
import { Outlet } from "react-router-dom"
import NavBar from "../Component/NavBar"
import Sidebar from "../Component/Sidebar"

export default function RootLayout() {
  return (
    <Grid templateColumns="repeat(6, 1fr)"  bg="gray.50">
      <GridItem as="aside" colSpan={{base: 6 , md: 2 ,xl:1}} bg="purple.400" minHeight={{lg:'100vh'}} p={{base:'20px', lg:'30px'}} >
            <Sidebar/>
      </GridItem>
      <GridItem as="main"  colSpan={{base: 6 , md: 4 ,xl:5}} p="40px">
            <NavBar/>
            <Outlet />
      </GridItem>
    </Grid>
  )
}
