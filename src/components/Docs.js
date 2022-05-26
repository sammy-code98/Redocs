import React, { useState, useEffect, useRef } from "react";
import ModalBox from "./Modal";
import { addDoc, collection, onSnapshot } from "firebase/firestore";

export default function Docs({ database }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // state to hold data
  const [title, setTitle] = useState("");

  // state to hold fetched data
  const [docsData, setDocsData] = useState([]);

  // take the database that we got from the firebaseConfig.js and the name of the collection we want to use.
  const collectionRef = collection(database, "docsData");

  const addDocs = () => {
    addDoc(collectionRef, {
      title: title,
    })
      .then(() => {
        alert("Data added");
        handleClose();
      })
      .catch(() => {
        alert("cannot add data");
      });
  };

  const getDocs = () => {
    onSnapshot(collectionRef, (data) => {
      setDocsData(
        data.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        })
      );
    });
  };
  // to prevent the  concurrent rendering react v18 use the useRef

  const isMounted = useRef();
  useEffect(() => {
    if (isMounted.current) {
      return;
    }
    isMounted.current = true;
    getDocs();
  }, []);
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

      <div className="grid-main">
        {docsData.map((doc) => {
          return (
            <div key={doc.id} className="grid-child">
              <p>{doc.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
