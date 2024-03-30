import React from "react";
import ShareIcon from "@mui/icons-material/Share";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import Menu from "@mui/material/Menu";
import { MenuItem } from "@mui/material";
import useComponentStore from "../state/store";

const Topbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { deleteComponent } = useComponentStore();
  
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
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
                backgroundColor: "#ffffff00",
              },
            }}
          >
            <MenuItem className="px-5 py-4 flex flex-col gap-4 ">
              <div className="flex gap-3 p-4 text-[white]">
                <AutoAwesomeIcon sx={{color:"#FE375B"}}/>
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
        <ShareIcon />
        <img src="/icons/clear.png" className="h-8 w-8" alt="clear all" />
      </div>
    </div>
  );
};

export default Topbar;
