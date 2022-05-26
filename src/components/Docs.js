import React, { useState } from "react";
import ModalBox from "./Modal";

export default function Docs(props) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  return (
    <div className="docs-container">
      <h1>my docs</h1>

      <button className="add-docs" onClick={handleOpen}>
        Add a Document
      </button>

      <ModalBox open={open}   setOpen={setOpen} />
    </div>
  );
}
