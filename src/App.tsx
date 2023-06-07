import "./App.css";
import { Docs, EditDocs, SignUp } from "components/index";
import { Routes, Route } from "react-router-dom";
import { database } from "./firebaseConfig";


function App() {

  return (
    <>
      <Routes>
            <Route path="/" element={<SignUp />} />

                <Route path="/docs" element={<Docs database={database} />} />
                <Route
                  path="/editDocs/:id"
                  element={<EditDocs database={database} />}
        />

      </Routes>
    </>
  );
}

export default App;
