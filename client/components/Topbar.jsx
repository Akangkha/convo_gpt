import React, { useState } from "react";
import ShareIcon from "@mui/icons-material/Share";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import Menu from "@mui/material/Menu";
import { MenuItem } from "@mui/material";
import GTranslateIcon from "@mui/icons-material/GTranslate";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import { useComponentStore, themeStore } from "../state/store";
import { Share } from "./Share";
import { Translate } from "./Translate";
import HoverCard from "./HoverCard";
import { Theme } from "./Theme";
import MenuIcon from "@mui/icons-material/Menu";
import toast from "react-hot-toast";
const Topbar = () => {
  const { theme } = themeStore();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [showPopover, setShowPopover] = useState(false);
  const [share, setShare] = useState(false);
  const [lang, setlang] = useState(false);
  const { deleteComponent } = useComponentStore();
  const [themes, setTheme] = React.useState(false);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const newChat = async () => {
    console.log("delete");
    toast.success("Chat Cleared");
    deleteComponent();
  };
  const translate = () => {
    setlang(!lang);
  };
  return (
    <div className="w-screen h-16 text-white  flex fixed z-10 justify-between items-center px-12 font-extrabold">
      <div
        className={`flex justify-center items-center text-highlight-${theme} gap-2 text-sm`}
      >
        ConvoGPT 1.0 : AIDoc
        <div>
          <div
            id="basic-button"
            aria-controls={open ? "" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <ArrowDropDownIcon sx={{ color: "white" }} />
          </div>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
            PaperProps={{
              style: {
                backgroundColor: "#1a171c",
              },
            }}
          >
            <MenuItem className="px-5 py-4 flex flex-col gap-4 ">
              <div className="flex gap-3 p-4 text-[white]">
                <AutoAwesomeIcon sx={{ color: "#4E54F0" }} />
                Upgrade
              </div>
              <div className="w-[20rem] text-wrap text-center text-white ">
                Unlock the Infinite Potential of AI: Experience Our Most
                Advanced and Intelligent GPT Model Yet.
              </div>
              <div className="bg-highlight bg-highlight-1 rounded-lg px-8 py-2 text-white font-bold text-center">
                Upgrade to Plus
              </div>
            </MenuItem>
          </Menu>
        </div>
      </div>
      <div className="flex  gap-4  items-center flex-col absolute top-6 right-4 md:static md:flex-row ">
        {lang && (
          <div className="relative inline-block">
            <Translate />
          </div>
        )}
        <GTranslateIcon onClick={translate} />
        <div className="relative inline-block">
          <ColorLensIcon
            onMouseEnter={() => setShowPopover(1)}
            onMouseLeave={() => setShowPopover(false)}
            onClick={() => setTheme(true)}
          />
          {showPopover == 1 && <HoverCard info="change theme" />}
        </div>

        {themes && <Theme setTheme={setTheme} />}
        <div className="relative inline-block">
          <ShareIcon
            onClick={() => setShare(true)}
            onMouseEnter={() => setShowPopover(2)}
            onMouseLeave={() => setShowPopover(false)}
          />
          {showPopover == 2 && <HoverCard info="share chat" />}
        </div>

        {share && <Share setShare={setShare} share={share} />}
        <div className="relative inline-block">
          <img
            src="/icons/clear.png"
            className="h-8 w-8 relative"
            alt="clear chat"
            onClick={newChat}
            onMouseEnter={() => setShowPopover(3)}
            onMouseLeave={() => setShowPopover(false)}
          />

          {showPopover == 3 && <HoverCard info="clear chat" />}
        </div>
      </div>
    </div>
  );
};

export default Topbar;
