import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import AllProject from "./pages/AllProject";
import FullProject from "./pages/FullProject";
import ErrorPage from "./pages/ErrorPage";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/home" element={<Home />}></Route>
          <Route exact path="/contactme" element={<Contact />}></Route>
          <Route exact path="/allprojects" element={<AllProject />}></Route>
          <Route exact path="/fullproject" element={<FullProject />}></Route>
          <Route path="*" element={<ErrorPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
