import React, { useState } from "react";
import { useParams } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function EditDocs() {
  const [docsDesc, setDocsDesc] = useState("");
  const fetchQuillData = (value) => {
      setDocsDesc(value)
  };
  let params = useParams();
  return (
    <div className="docs-container">
      <h1>Edit Doc</h1>
      <div className="edit-container">
        <ReactQuill value={docsDesc} onChange={fetchQuillData} />
      </div>
    </div>
  );
}

export default EditDocs;
