import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import ModalBox from "./Modal";
import { addDoc, collection, onSnapshot } from "firebase/firestore";
import HomeLayout from "../layout/HomeLayout";
import DocCard from "./Card";
import Box from "@mui/material/Box";

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
      docsDesc: "",
      createdAt: new Date(),
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

  let navigate = useNavigate();
  const getId = (id) => {
    navigate(`/editDocs/${id}`);
  };
  // to prevent the  concurrent rendering react v18 use the useRef

  const isMounted = useRef();
  useEffect(() => {
    if (isMounted.current) {
      return;
    }
    isMounted.current = true;
    getDocs();
  });
  return (
    <HomeLayout>
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

        <Box
          mt={4}
          sx={{
            display: "grid",
            gap: 4,
            gridTemplateColumns: "repeat(4, 1fr)",
          }}
        >
          {docsData.map((doc) => {
            return (
              <div key={doc.id} onClick={() => getId(doc.id)}>
                <DocCard
                  title={doc.title}
                  // dangerouslySetInnerHTML={{ __html: doc.docsDesc }}
                  docsDesc={{__html: doc.docsDesc }}
                  // createdAt={doc.createdAt.toDate().getTime()}
                />
              </div>
            );
          })}
        </Box>
      </div>
    </HomeLayout>
  );
}
