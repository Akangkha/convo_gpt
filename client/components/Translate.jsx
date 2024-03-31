import * as React from "react";
import Divider from "@mui/material/Divider";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import { useComponentStore, themeStore } from "../state/store";
import { v4 as uuidv4 } from "uuid";
import ListItemText from "@mui/material/ListItemText";
const langset = async ({ lang }) => {
  try {
    const userData = {
      userId: uuidv4(),
      chatbotId: uuidv4(),
      languageModel: "gpt-1.0",
      messages: [
        {
          author: "user",
          text: `We will have conversationin ${lang}`,
          timestamp: new Date(),
        },
      ],
    };

    addComponent(userData);
    await createChat(userData);
    setInputValue("");
  } catch (error) {
    console.error("Error creating chat:", error.message);
  }
};

export function Translate() {
  const { chats, addComponent } = useComponentStore();
  return (
    <div
      sx={{ width: 320, maxWidth: "100%" }}
      className="absolute top-12 z-10 rounded-lg bg-accent-1 text-black"
    >
      <MenuList>
        <MenuItem>
          <ListItemText onClick={langset}>Hindi</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText onClick={langset}>Tamil</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText onClick={langset}>Bengali</ListItemText>
        </MenuItem>
        <Divider />
      </MenuList>
    </div>
  );
}
