import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import DeleteIcon from "@mui/icons-material/Delete";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import { Card } from "../components/Card";
import ListItemText from "@mui/material/ListItemText";
import HistoryIcon from "@mui/icons-material/History";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { getChats } from "../lib/page";
import HoverCard from "./HoverCard";
import { getlocation } from "../lib/geolocation";
import toast from "react-hot-toast";
import { useComponentStore } from "../state/store";
import { deleteChats } from "../lib/page";
export default function Sidebar() {
  const [open, setOpen] = React.useState(false);
  const [userChats, setChats] = React.useState([]);
  const { chats, addComponent} = useComponentStore();
  const [showPopover, setShowPopover] = useState(false);
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
  }, [chats, addComponent]);

  const deleteData = async () => {
    try {
      await deleteChats();
      toast.success("History Deleted! Refresh to see changes");
    } catch (error) {
      console.error("Error deleting chat:", error.message);
    }
  };

  const DrawerList = (
    <Box sx={{ width: 250 ,height:600,overflow:"scroll" }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {userChats.map((chat, index) =>
          chat.messages.length > 0 ? (
            chat.messages.map((message, messageIndex) =>
              message ? (
                <Card className="border rounded-lg flex border-black shadow-lg h-12 text-accent-1">
                  <>
                    <div className="overflow-hidden w-[85%] h-full">
                      {message.text.substring(0, 25)}
                    </div>
                    <MoreHorizIcon />
                  </>
                </Card>
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
    <div className=" h-screen top-0  flex items-center sidebar absolute">
      <div className="relative w-64">
        <Drawer
          open={open}
          onClose={toggleDrawer(false)}
          backgroundColor="#1a171c"
          PaperProps={{
            style: {
              backgroundColor: "#1a171c",
            },
          }}
          className="relative"
        >
          <div className="flex justify-between items-center px-4 py-2 font-semibold text-[#ffffffaf] bg-black">
            <HistoryIcon />
            <div className="absolute left-12">allChats</div>
            <div className="relative inline-block justify-end">
              <DeleteIcon
                onClick={deleteData}
                className="cursor-pointer"
                onMouseEnter={() => setShowPopover(2)}
                onMouseLeave={() => setShowPopover(false)}
              />
              {showPopover && (
                <HoverCard info="delete history" className="right-0" />
              )}
            </div>
          </div>
          {DrawerList}
          <div className="bg-highlight-1 max-w-[90%] text-center flex items-center justify-center text-white  py-4 rounded-lg m-3 cursor-pointer text-sm absolute bottom-0" onClick={()=>getlocation()}>
            Contact pharmacies/doctors nearby
          </div>
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
