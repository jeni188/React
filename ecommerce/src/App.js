import {  BrowserRouter as Router , Routes,Route } from "react-router-dom";
import "./index.css";

import ParentComponent from "./componentspractics/ParentComponent";
import AnotherParentComponent from "./componentspractics/AnotherComponent";
import NavbarComponent from "./componentspractics/frontend/NavbarComponent";
function App(){
  return (
    <Router>
      <NavbarComponent/>
      <Routes>
        <Route path="/" element={<ParentComponent />} />
        <Route path="/father" element={<AnotherParentComponent />} />
      </Routes>

    </Router>



  );
}

export default App;
 