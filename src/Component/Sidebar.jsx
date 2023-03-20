import { List, ListIcon, ListItem } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import {AtSignIcon, CalendarIcon, EditIcon} from "@chakra-ui/icons"

export default function Sidebar() {
  return (
      <List color={"white"} fontSize="1.2em" spacing={4} py="2">
            <ListItem>
                  <NavLink to={"/"}>
                    <ListIcon as={CalendarIcon}  color="white"/>
                        DashBoard
                   
                  </NavLink>
            </ListItem> 
            <ListItem>
                  <NavLink to={"/create"}>
                  <ListIcon as={EditIcon}  color="white"/>
                        Create
                  </NavLink>
            </ListItem>   
            <ListItem>
                  <NavLink to={"/profile"}>
                  <ListIcon as={AtSignIcon}  color="white"/>
                        Profile
                  </NavLink>
            </ListItem>             
      </List>
  )
}
