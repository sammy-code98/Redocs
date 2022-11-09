/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { updateDoc, doc, collection, onSnapshot } from "firebase/firestore";

function EditDocs({ database }: { database: any }) {
  const [docsDesc, setDocsDesc] = useState("");
  const [docTitle, setDocTitle] = useState("");
  let params = useParams();
  const collectionRef = collection(database, "docsData");
  const isMounted = useRef<boolean | null>(null);

  const fetchQuillData = (value: string) => {
    setDocsDesc(value);
  };

  useEffect(() => {
    const updateQuillData = setTimeout(() => {
      const document = doc(collectionRef, params.id);
      updateDoc(document, {
        docsDesc: docsDesc,
      })
        .then(() => {
          alert("saved");
        })
        .catch(() => {
          alert("failed");
        });
    }, 2000);
    return () => clearTimeout(updateQuillData);
  }, [docsDesc]);

  const fetchData = () => {
    const document = doc(collectionRef, params.id);
    onSnapshot(document, (docs) => {
      setDocTitle(docs.data()?.title);
      setDocsDesc(docs.data()?.docsDesc);
      //   console.log(docs.data().docsDesc);
    });
  };
  useEffect(() => {
    if (isMounted.current) {
      return;
    }
    isMounted.current = true;
    fetchData();
  }, []);

  return (
    <div className="editDocs-main">
      <h1>{docTitle}</h1>
      <div className="editDocs-inner">
        <ReactQuill
          className="react-quill"
          value={docsDesc}
          onChange={fetchQuillData}
        />
      </div>
    </div>
  );
}

export default EditDocs;
