import * as React from "react";
import Box from "@mui/material/Box";
import { useComponentStore } from "../state/store";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { copyContent } from "../lib/copyText";

import Modal from "@mui/material/Modal";
import "../style/chatCard.css";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};

export const Share = ({ setShare, share }) => {
  const handleClose = () => setShare(false);
  const { chats } = useComponentStore();


  return (
    <Modal
      open={share}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{ border: "none", outline: "none" }}
    >
      <Box
        sx={style}
        className="container-card 
        .bg-blue-box flex flex-col items-center justify-center p-8 w-[40vw] "
      >
        <div className="container-card h-[30rem]  ">
          <div className="border rounded-lg p-6 h-[28rem] overflow-scroll" id="copyText" >
            {chats.length > 0 ? (
              chats.map((message, index) => (
                <div key={index} id="copyText">
                  {message.message.messages.map((msg, idx) => (
                    <div key={idx}>
                      <p>
                        <strong>{msg.author}</strong>
                      </p>
                      <p>{msg.text}</p>
                    </div>
                  ))}
                </div>
              ))
            ) : (
              <p className="text-center">No chats to share !</p>
            )}
          </div>
          <section className="mt-6 flex justify-end cursor-pointer"  onClick={copyContent}>
            <ContentCopyIcon/>
          </section>
        </div>
      </Box>
    </Modal>
  );
};
