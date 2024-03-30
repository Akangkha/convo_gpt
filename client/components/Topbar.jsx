import React, { useState } from "react";
import ShareIcon from "@mui/icons-material/Share";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import Menu from "@mui/material/Menu";
import { MenuItem } from "@mui/material";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import { useComponentStore } from "../state/store";
import HoverCard from "./HoverCard";
import { Theme } from "./Theme";
const Topbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [showPopover, setShowPopover] = useState(false);
  const { deleteComponent } = useComponentStore();
  const [theme, setTheme] = React.useState(false);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const newChat = async () => {
    console.log("delete");
    deleteComponent();
  };
  return (
    <div className="w-screen h-16 text-white  flex fixed z-10 justify-between items-center px-12 font-extrabold">
      <div className="flex justify-center items-center gap-2">
        ConvoGPT 1.0
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
                <AutoAwesomeIcon sx={{ color: "#FE375B" }} />
                Upgrade
              </div>
              <div className="w-[20rem] text-wrap text-center text-white ">
                Unlock the Infinite Potential of AI: Experience Our Most
                Advanced and Intelligent GPT Model Yet.
              </div>
              <div className="bg-highlight rounded-lg px-8 py-2 text-white font-bold text-center">
                Upgrade to Plus
              </div>
            </MenuItem>
          </Menu>
        </div>
      </div>
      <div className="flex gap-4  items-center">
        <div className="relative inline-block">
          <ColorLensIcon
            onMouseEnter={() => setShowPopover(1)}
            onMouseLeave={() => setShowPopover(false)}
            onClick={() => setTheme(true)}
          />
          {showPopover == 1 && <HoverCard info="change theme" />}
        </div>
        {theme && <Theme  setTheme={setTheme} />}
        <div className="relative inline-block">
          <ShareIcon
            onMouseEnter={() => setShowPopover(2)}
            onMouseLeave={() => setShowPopover(false)}
          />
          {showPopover == 2 && <HoverCard info="share chat" />}
        </div>

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
