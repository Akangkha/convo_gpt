import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import "../style/chatCard.css";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};

export const Theme = ({ setTheme }) => {
  const handleClose = () => setTheme(false);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{ border: "none", outline: "none" }}
    >
      <Box
        sx={style}
        className="container-card 
        .bg-theme-box flex flex-col items-center justify-center p-8 pt-0 w-[50vw] mbXSmall:h-[55vh] h-[60vh]"
      >
        <Typography id="modal-modal-title" variant="h5" component="h2">
          THEME- ConvoGPT 1.0
        </Typography>
        <p className="text-sm mt-4  w-[98%] mbXSmall:w-[80%]">
          Transform Your Experience: Embrace a New Theme Today! Select one to
          choose your theme!
        </p>
        <div className="grid md:grid-cols-3 grid-cols-1 items-center justify-around p-2 gap-4 h-[10rem] overflow-scroll">
          <div className="flex flex-col border rounded-lg p-6 justify-center items-center">
            <img
              src="/icons/theme1.png"
              alt="theme 1 pallette"
              width="49px"
              style={{ marginBottom: "0px" }}
            />
          </div>
          <div className="flex flex-col border rounded-lg p-6 justify-center items-center">
            <img
              src="/icons/theme2.png"
              alt="theme 2 pallette"
              width="49px"
              style={{ marginBottom: "0px" }}
            />
          </div>
          <div className="flex flex-col border rounded-lg p-6 justify-center items-center">
            <img
              src="/icons/theme3.png"
              alt="theme 3 pallette"
              width="55px"
              style={{ marginBottom: "0px" }}
            />
          </div>
        </div>
      </Box>
    </Modal>
  );
};
