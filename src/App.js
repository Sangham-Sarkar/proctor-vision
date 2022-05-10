import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/header";
import Spash from "./components/Spash/spash";
import Login from "./components/Login/login";
import OnBoard1 from "./components/OnBoard/OnBoard1";
import OnBoard2 from "./components/OnBoard/OnBoard2";
import OnBoard3 from "./components/OnBoard/OnBoard3";
import OnBoard4 from "./components/OnBoard/OnBoard4";
import Home from "./components/Home/Home";
import Settings from "./components/Settings/Settings";
import Check from "./components/Check/Check";
import Exam from "./components/Exam/Exam";

function App() {
  return (
    <div>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Spash />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/onboard1" element={<OnBoard1 />} />
          <Route path="/onboard2" element={<OnBoard2 />} />
          <Route path="/onboard3" element={<OnBoard3 />} />
          <Route path="/onboard4" element={<OnBoard4 />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Settings" element={<Settings />} />
          <Route path="/Check" element={<Check />} />
          <Route path="/Exam" element={<Exam />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
