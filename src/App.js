import './App.css';
import Docs from './components/Docs';
import {app, database} from "./firebaseConfig"

function App() {
  return (
   <>
   <Docs  database={database}/>
   </>
  );
}

export default App;
