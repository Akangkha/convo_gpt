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
        className=" container-card flex flex-col items-center justify-center p-8"
      >
        
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Theme
        </Typography>
        <div className="flex w-full h-full items-center justify-around p-2 gap-4">
          <div className="flex flex-col border rounded-lg p-2 justify-center items-center">
            {" "}
            <img src="/icons/theme1.png" alt="theme 1 pallette" width="49px" />
            pink markup
          </div>
          <div className="flex flex-col border rounded-lg p-2 justify-center items-center">
            <img src="/icons/theme2.png" alt="theme 2 pallette" width="49px" />
            blue sparkle
          </div>
          <div className="flex flex-col border rounded-lg p-2 justify-center items-center">
            <img src="/icons/theme3.png" alt="theme 3 pallette" width="49px" />
            yellow sunshine
          </div>
        </div>
      </Box>
    </Modal>
  );
};
