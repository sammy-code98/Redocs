import "./App.css";
import { Docs, EditDocs } from "components/index";
import { Routes, Route } from "react-router-dom";
import { app, database } from "./firebaseConfig";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Docs database={database} />} />
        <Route path="/editDocs/:id"  element={<EditDocs  database={database}/>} />
      </Routes>
    </>
  );
}

export default App;
