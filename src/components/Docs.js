import React, { useState } from "react";
import ModalBox from "./Modal";
import { addDoc, collection } from "firebase/firestore";

export default function Docs({ database }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);

  // state to hold data
  const [title, setTitle] = useState("");
  // take the database that we got from the firebaseConfig.js and the name of the collection we want to use.
  const collectionRef = collection(database, "docsData");

  const addDocs = () => {
    addDoc(collectionRef, {
      title: title,
    })
      .then(() => {
        alert("Data added");
      })
      .catch(() => {
        alert("cannot add data");
      });
  };
  return (
    <div className="docs-container">
      <h1>my docs</h1>

      <button className="add-docs" onClick={handleOpen}>
        Add a Document
      </button>

      <ModalBox
        open={open}
        setOpen={setOpen}
        title={title}
        setTitle={setTitle}
        addDocs={addDocs}
      />
    </div>
  );
}
