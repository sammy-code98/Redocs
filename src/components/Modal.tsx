import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { addDoc } from 'firebase/firestore';

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function ModalBox({ open, setOpen, title, setTitle, addDocs }: { open: boolean, setOpen: any, title: string, setTitle: any, addDocs: any }) {
  const handleClose = () => setOpen(false);
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <input
            placeholder="Add the Title"
            className="add-input"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />{" "}
          <div className="button-container">
            <Button variant="contained" className="add-docs" onClick={addDocs}>
              Add
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
