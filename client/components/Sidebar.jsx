import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import { getChats } from "../lib/page";
export default function Sidebar() {
  const [open, setOpen] = React.useState(false);
  const [chats, setChats] = React.useState([]);
  const toggleDrawer = () => () => {
    setOpen(!open);
  };

  useEffect(() => {
    let isMounted = true;

    async function fetchData() {
      try {
        const chats = await getChats(); 
        if (isMounted) {
          console.log("Chats:", chats);
          setChats(chats);
        }
      } catch (error) {
        console.error("Failed to fetch chats:", error.message);
      }
    }


    if (typeof window !== "undefined") {
      fetchData();
    }

    return () => {
      isMounted = false;
    };
  }, []);

  console.log(chats);

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {chats.map((chat, index) =>
          chat.messages.length > 0 ? (
            chat.messages.map((message, messageIndex) =>
              message ? (
                <ListItem key={message._id}>
                  <ListItemText primary={message.text} />
                </ListItem>
              ) : (
                <ListItem key={messageIndex}>
                  <ListItemText primary="No prompt available" />
                </ListItem>
              )
            )
          ) : (
            <ListItem key={index}>
              <ListItemText primary="No prompt in this chat" />
            </ListItem>
          )
        )}
      </List>
      <Divider />
    </Box>
  );

  return (
    <div
      sx={{ bgcolor: "#97ACCF" }}
      className=" h-screen absolute top-0  flex items-center"
    >
      <div className="relative w-64">
        <Drawer
          open={open}
          onClose={toggleDrawer(false)}
          backgroundColor="#5638b7"
          PaperProps={{
            style: {
              backgroundColor: "#5638b7",
            },
          }}
          className="relative"
        >
          {DrawerList}
        </Drawer>
        {open ? (
          <NavigateBeforeIcon
            onClick={toggleDrawer(false)}
            className="absolute top-0 -right-10 m-4"
          />
        ) : (
          <NavigateNextIcon
            onClick={toggleDrawer(true)}
            className="absolute top-0  m-4"
          />
        )}
      </div>
    </div>
  );
}
