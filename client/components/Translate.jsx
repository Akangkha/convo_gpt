import * as React from "react";
import Divider from "@mui/material/Divider";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import { useComponentStore, themeStore } from "../state/store";
import { v4 as uuidv4 } from "uuid";
import ListItemText from "@mui/material/ListItemText";
import { createChat } from "../lib/page";
import { botResponse } from "../lib/page";
export function Translate() {
  const { chats, addComponent } = useComponentStore();

  const langset = async (lang) => {
    try {
      const botResponseData = await botResponse(
        `From now on I will talk in ${lang} language!`
      );
      const botData = {
        userId: uuidv4(),
        chatbotId: uuidv4(),
        languageModel: "gpt-1.0",
        messages: [
          {
            author: "ConvoGPT",
            text: botResponseData,
            timestamp: new Date(),
          },
        ],
      };
      addComponent(botData);
      await createChat(botData);
      await createChat(botData);
    } catch (error) {
      console.error("Error creating chat:", error.message);
    }
  };

  return (
    <div
      sx={{ width: 320, maxWidth: "100%" }}
      className="absolute top-4 z-10 rounded-lg bg-accent-1 text-black"
    >
      <MenuList>
        <MenuItem>
          <ListItemText onClick={() => langset("Hindi")}>Hindi</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText onClick={() => langset("Tamil")}>Tamil</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText onClick={() => langset("Bengali")}>
            Bengali
          </ListItemText>
        </MenuItem>

        <MenuItem>
          <ListItemText onClick={() => langset("Dutch")}>Dutch</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText onClick={() => langset("Korean")}>Korean</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText onClick={() => langset("Japanese")}>
            Japanese
          </ListItemText>
        </MenuItem>
        <Divider />
      </MenuList>
    </div>
  );
}
