import "./App.css";
import { Docs, EditDocs, SignUp } from "components/index";
import { Routes, Route } from "react-router-dom";
import { database, auth } from "./firebaseConfig";
import { useAuthState } from 'react-firebase-hooks/auth';


function App() {
  const [user] = useAuthState(auth)

  return (
    <>
      <Routes>
        {
          !user ? (
            <Route path="/" element={<SignUp />} />

          ) : (
            <>
                <Route path="/docs" element={<Docs database={database} />} />
                <Route
                  path="/editDocs/:id"
                  element={<EditDocs database={database} />}
                />
            </>
          )
        }

      </Routes>
    </>
  );
}

export default App;
